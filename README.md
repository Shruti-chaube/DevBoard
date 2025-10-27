# DevBoard v2.0 - Professional Task Tracker

A powerful, production-ready task management application built with React, featuring advanced search, statistics, and professional-grade features.

> **NEW in v2.0**: Statistics Dashboard, Search & Filter, Due Dates, Archive, Keyboard Shortcuts, and more!

## Features

### Core Features
- **Task Management**: Create, edit, delete, duplicate, and organize tasks
- **Three-Column Board**: To Do, In Progress, and Done
- **Priority Levels**: Low, Medium, and High priority badges with color coding
- **Theme Toggle**: Light and Dark mode support with persistence
- **Local Storage**: All tasks persist in browser storage
- **Toast Notifications**: User-friendly feedback on all actions
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for professional feel

### Advanced Features (v2.0)
- **Statistics Dashboard**: Real-time metrics showing total tasks, completion rate, and overdue items
- **Search & Filter**: Find tasks quickly by title/description, filter by priority, sort 5 different ways
- **Due Dates**: Set deadlines with smart display (Today, Tomorrow, or formatted date)
- **Archive**: Hide completed tasks to keep your board clean
- **Keyboard Shortcuts**: Press Ctrl+K to quickly add tasks
- **Task Duplication**: Clone tasks instantly for similar work
- **Enhanced UI**: Professional empty states, better animations, improved mobile experience
- **Performance**: Optimized filtering, sorting, and rendering

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Hot Toast** - Toast notifications
- **Framer Motion** - Animation library
- **localStorage** - Client-side data persistence

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # App header with theme toggle
│   ├── TaskCard.jsx         # Individual task card with all actions
│   ├── AddTaskModal.jsx     # Modal for creating/editing tasks
│   ├── Statistics.jsx       # NEW: Real-time statistics dashboard
│   └── SearchFilter.jsx     # NEW: Search, filter, and sort controls
├── pages/
│   └── Board.jsx            # Main board with three columns + new features
├── context/
│   └── TaskContext.jsx      # Global state management (enhanced)
├── utils/
│   └── storage.js           # localStorage utilities
├── App.jsx                  # Main app component
├── main.jsx                 # App entry point
└── index.css                # Global styles + theme variables
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd devboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## How to Use

### Basic Operations
1. **Add a Task**: Click "Add Task" button or press `Ctrl+K`
2. **Edit a Task**: Click the edit icon on any task card
3. **Delete a Task**: Click the delete icon on any task card
4. **Move Tasks**: Use the arrow buttons to move between columns
5. **Toggle Theme**: Click the theme icon in the header

### New Features
6. **Set Due Dates**: Add deadlines when creating/editing tasks
7. **Search Tasks**: Type in the search box to find tasks instantly
8. **Filter by Priority**: Use dropdown to show only High/Medium/Low priority
9. **Sort Tasks**: Choose from 5 sorting options (newest, oldest, priority, due date)
10. **Duplicate Tasks**: Click the duplicate icon to create a copy
11. **Archive Tasks**: Click the archive icon on completed tasks to archive them
12. **View Statistics**: Check the dashboard at top for real-time metrics

## Key Concepts Demonstrated

- **Component-Based Architecture**: Modular, reusable components
- **State Management**: Using React Context API with useReducer
- **Side Effects**: useEffect for localStorage sync
- **Form Handling**: Controlled components with validation
- **Conditional Rendering**: Dynamic UI based on state
- **Props and Callbacks**: Parent-child component communication
- **Custom Hooks**: useTasks hook for accessing context

## Learning Points

This project is perfect for intermediate React developers looking to:
- Practice React fundamentals
- Learn context-based state management
- Implement CRUD operations
- Work with localStorage API
- Build responsive layouts with TailwindCSS
- Add animations and transitions
- Create a polished user experience

## Contributing

Feel free to fork this project and add your own features! Some ideas:
- Drag and drop functionality
- Task due dates and reminders
- Task categories/tags
- Search and filter tasks
- Export/import tasks

## Additional Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Beginner-friendly getting started guide
- **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Technical deep dive and architecture

## License

This project is open source and available for educational purposes.

---

## What's Next?

DevBoard v2.0 is production-ready! Consider adding:
- Drag & drop functionality
- Backend API integration
- User authentication
- Team collaboration features
- Mobile app version

---

**Built with care and upgraded to v2.0**
