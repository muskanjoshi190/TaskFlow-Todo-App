# TaskFlow – Interactive To-Do List

A simple and responsive To-Do List web application built using **HTML, CSS, and JavaScript**. TaskFlow helps users organize daily tasks, track their progress, and manage completed activities with a clean interface.

## 🌐 Live Demo

[View TaskFlow Live](https://muskanjoshi190.github.io/TaskFlow-Todo-App/)

## ✨ Features

- **Add Tasks:** Create new tasks easily.
- **Complete Tasks:** Mark tasks as completed or undo them.
- **Delete Tasks:** Remove tasks whenever needed.
- **Task Filters:** View All, Active, or Completed tasks.
- **Remaining Task Counter:** Track pending tasks.
- **Clear Completed:** Remove all completed tasks at once.
- **LocalStorage:** Automatically saves tasks in the browser.
- **Responsive Design:** Works on desktop and mobile screens.

## 🛠️ Technologies Used

- HTML5 – Website structure
- CSS3 – Styling and responsive layout
- JavaScript – Dynamic functionality and DOM manipulation
- LocalStorage – Persistent task storage

## 📂 Project Structure

```text
TaskFlow-Todo-App/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

## ⚙️ How It Works

1. Enter a task in the input field.
2. Click the Add button or press Enter.
3. Mark tasks as completed when finished.
4. Delete tasks that are no longer needed.
5. Use filters to view tasks by status.

## 💾 Data Storage

TaskFlow uses the browser's **LocalStorage** to save task data.

- `JSON.stringify()` converts the tasks array into a string before saving.
- `JSON.parse()` converts the stored string back into JavaScript data when loading the application.

This allows tasks to remain available even after refreshing or reopening the browser.

## 👩‍💻 Developer

**Muskan Joshi**

B.Tech – Computer Science Engineering

- GitHub: [@muskanjoshi190](https://github.com/muskanjoshi190)
- LinkedIn: [Muskan Joshi](https://www.linkedin.com/in/muskan-joshi-140310341/)

---

⭐ If you like this project, consider giving it a star!
