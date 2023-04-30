const newTaskInput = document.getElementById('new-task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
      <span class="text">${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(task);
    newTaskInput.value = '';
  }
}

function deleteTask(event) {
  const task = event.target.closest('.task');
  if (task) {
    task.remove();
  }
}

addTaskButton.addEventListener('click', addTask);
newTaskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
taskList.addEventListener('click', deleteTask);
