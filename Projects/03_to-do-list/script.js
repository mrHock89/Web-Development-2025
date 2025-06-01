document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";

      const span = document.createElement("span");
      span.textContent = task.text;
      span.addEventListener("click", () => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
      });

      const actions = document.createElement("div");
      actions.className = "task-actions";

      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.title = "Edit";
      editBtn.addEventListener("click", () => {
        const newText = prompt("Edit task:", task.text);
        if (newText !== null && newText.trim() !== "") {
          tasks[index].text = newText.trim();
          saveTasks();
          renderTasks();
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.title = "Delete";
      deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actions);

      taskList.appendChild(li);
    });
  }

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
      tasks.push({ text: taskText, completed: false });
      saveTasks();
      renderTasks();
      taskInput.value = "";
    }
  });

  renderTasks();
});
