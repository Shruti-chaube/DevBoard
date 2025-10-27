import { createContext, useContext, useReducer, useEffect } from 'react';
import { loadTasks, saveTasks } from '../utils/storage';

// Create context
const TaskContext = createContext();

// Action types
export const ACTIONS = {
  LOAD_TASKS: 'LOAD_TASKS',
  ADD_TASK: 'ADD_TASK',
  EDIT_TASK: 'EDIT_TASK',
  DELETE_TASK: 'DELETE_TASK',
  MOVE_TASK: 'MOVE_TASK',
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  DUPLICATE_TASK: 'DUPLICATE_TASK',
};

// Task statuses
export const STATUS = {
  TODO: 'todo',
  IN_PROGRESS: 'in-progress',
  DONE: 'done',
};

// Task priority levels
export const PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
};

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_TASKS:
      return action.payload;

    case ACTIONS.ADD_TASK:
      return [...state, action.payload];

    case ACTIONS.EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

    case ACTIONS.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case ACTIONS.MOVE_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.status }
          : task
      );

    case ACTIONS.ARCHIVE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, archived: true, archivedAt: new Date().toISOString() }
          : task
      );

    case ACTIONS.DUPLICATE_TASK:
      return [...state, action.payload];

    default:
      return state;
  }
};

// Provider component
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = loadTasks();
    dispatch({ type: ACTIONS.LOAD_TASKS, payload: storedTasks });
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0 || loadTasks().length > 0) {
      saveTasks(tasks);
    }
  }, [tasks]);

  // Helper functions
  const addTask = (task) => {
    const newTask = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...task,
    };
    dispatch({ type: ACTIONS.ADD_TASK, payload: newTask });
    return newTask;
  };

  const editTask = (updatedTask) => {
    dispatch({ type: ACTIONS.EDIT_TASK, payload: updatedTask });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: taskId });
  };

  const moveTask = (taskId, newStatus) => {
    dispatch({ type: ACTIONS.MOVE_TASK, payload: { id: taskId, status: newStatus } });
  };

  const archiveTask = (taskId) => {
    dispatch({ type: ACTIONS.ARCHIVE_TASK, payload: taskId });
  };

  const duplicateTask = (task) => {
    const duplicatedTask = {
      ...task,
      id: Date.now().toString(),
      title: `${task.title} (Copy)`,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    dispatch({ type: ACTIONS.DUPLICATE_TASK, payload: duplicatedTask });
    return duplicatedTask;
  };

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status && !task.archived);
  };

  const value = {
    tasks,
    addTask,
    editTask,
    deleteTask,
    moveTask,
    archiveTask,
    duplicateTask,
    getTasksByStatus,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

// Custom hook to use the TaskContext
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};

