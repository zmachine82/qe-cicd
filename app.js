import { TaskList } from './task-list.js';

const taskList = new TaskList();

taskList.addObserver((tasks) => {
    const ul = document.getElementById('todo-list');
    ul.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', () => {
            taskList.removeTask(task);
        });
        ul.appendChild(li);
    });
});

document.getElementById('add-btn').addEventListener('click', () => {
    const task = document.getElementById('todo-input').value;
    taskList.addTask(task);
    document.getElementById('todo-input').value = '';
});
