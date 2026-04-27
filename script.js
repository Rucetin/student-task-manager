let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.done ? 'done' : ''}">
        ${task.name} (Due: ${task.date})
      </span>
      <button onclick="toggleTask(${index})">✔</button>
      <button onclick="deleteTask(${index})">❌</button>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const name = document.getElementById("taskInput").value;
  const date = document.getElementById("deadline").value;

  if (!name) return alert("Enter task!");

  tasks.push({ name, date, done: false });
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();