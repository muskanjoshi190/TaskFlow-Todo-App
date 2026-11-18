# TaskFlow — Interactive To-Do List

A responsive to-do list built with HTML, CSS and vanilla JavaScript. Tasks are saved in browser LocalStorage, so they remain after refreshing the page.

## Features
- Add tasks using the Add button or Enter key
- Rejects empty tasks
- Mark tasks complete / active
- Delete individual tasks
- All, Active and Completed filters
- Remaining-task counter
- Clear all completed tasks
- LocalStorage persistence with safe JSON parsing
- Uses `textContent` to display task text safely

## Run locally
1. Extract this folder.
2. Open it in VS Code.
3. Open `index.html` with the VS Code Live Server extension.
4. Add a few tasks, refresh the page, and confirm they remain.

## How LocalStorage works
- On startup, `loadTasks()` reads the `taskflow_tasks` key and converts the saved JSON text back into an array using `JSON.parse()`.
- Whenever tasks change, `saveTasks()` converts the array into JSON text using `JSON.stringify()` and stores it with `localStorage.setItem()`.
- `try/catch` protects the app if saved data is damaged or browser storage is unavailable.

## Files
- `index.html` — page structure
- `style.css` — responsive styling
- `app.js` — task state, events, rendering and LocalStorage
