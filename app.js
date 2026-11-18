const STORAGE_KEY = "taskflow_tasks";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const allCount = document.getElementById("allCount");
const emptyState = document.getElementById("emptyState");
const formMessage = document.getElementById("formMessage");
const clearCompletedButton = document.getElementById("clearCompleted");
const filterButtons = document.querySelectorAll(".filter-button");

let tasks = loadTasks();
let currentFilter = "all";

function loadTasks() {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(savedTasks) ? savedTasks : [];
  } catch (error) {
    // Invalid or damaged saved data should not stop the app.
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    formMessage.textContent = "Your browser could not save the tasks. Check storage settings.";
  }
}

function renderTasks() {
  taskList.replaceChildren();

  const visibleTasks = tasks.filter((task) => {
    if (currentFilter === "active") return !task.done;
    if (currentFilter === "done") return task.done;
    return true;
  });

  visibleTasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `task-item${task.done ? " completed" : ""}`;
    item.dataset.id = String(task.id);

    const checkButton = document.createElement("button");
    checkButton.type = "button";
    checkButton.className = "task-check";
    checkButton.dataset.action = "toggle";
    checkButton.setAttribute("aria-label", task.done ? "Mark task active" : "Mark task completed");
    checkButton.textContent = task.done ? "✓" : "";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.dataset.action = "delete";
    deleteButton.setAttribute("aria-label", "Delete task");
    deleteButton.textContent = "×";

    item.append(checkButton, taskText, deleteButton);
    taskList.append(item);
  });

  const remaining = tasks.filter((task) => !task.done).length;
  taskCount.textContent = `${remaining} ${remaining === 1 ? "task" : "tasks"} left`;
  allCount.textContent = String(tasks.length);
  emptyState.hidden = visibleTasks.length > 0;
  clearCompletedButton.disabled = !tasks.some((task) => task.done);
  clearCompletedButton.style.opacity = clearCompletedButton.disabled ? "0.45" : "1";
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();

  if (!text) {
    formMessage.textContent = "Please enter a task before adding.";
    taskInput.focus();
    return;
  }

  tasks.unshift({
    id: Date.now() + Math.random(),
    text,
    done: false
  });

  taskInput.value = "";
  formMessage.textContent = "";
  saveTasks();
  renderTasks();
  taskInput.focus();
});

taskList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("button[data-action]");
  if (!actionButton) return;

  const taskItem = actionButton.closest(".task-item");
  const taskId = Number(taskItem.dataset.id);

  if (actionButton.dataset.action === "toggle") {
    tasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
  }

  if (actionButton.dataset.action === "delete") {
    tasks = tasks.filter((task) => task.id !== taskId);
  }

  saveTasks();
  renderTasks();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((filter) => {
      filter.classList.toggle("active", filter === button);
    });
    renderTasks();
  });
});

clearCompletedButton.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.done);
  saveTasks();
  renderTasks();
});

document.getElementById("todayDate").textContent = new Intl.DateTimeFormat("en", {
  weekday: "short",
  month: "short",
  day: "numeric"
}).format(new Date());

renderTasks();
