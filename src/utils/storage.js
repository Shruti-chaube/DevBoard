// LocalStorage utility functions for DevBoard

const STORAGE_KEY = 'devboard_tasks';

/**
 * Load tasks from localStorage
 * @returns {Array} Array of tasks or empty array if none exist
 */
export const loadTasks = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

/**
 * Save tasks to localStorage
 * @param {Array} tasks - Array of tasks to save
 */
export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

/**
 * Clear all tasks from localStorage
 */
export const clearTasks = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing tasks from localStorage:', error);
  }
};

