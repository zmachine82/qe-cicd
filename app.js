import { TaskList } from './task-list.js';

class TaskRenderer {
    constructor(taskList) {
        this.taskList = taskList;
    }

    render() {
        const ul = document.getElementById('todo-list');
        ul.innerHTML = '';
        this.taskList.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            li.addEventListener('click', () => {
                this.taskList.removeTask(task);
                this.render();
            });
            ul.appendChild(li);
        });
    }
}

const taskList = new TaskList();
const taskRenderer = new TaskRenderer(taskList);



document.getElementById('add-btn').addEventListener('click', () => {
    const task = document.getElementById('todo-input').value;
    taskList.addTask(task);
    taskRenderer.render();
    document.getElementById('todo-input').value = '';
});
