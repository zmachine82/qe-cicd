class Observable {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }
  }


export class TaskList extends Observable {
    constructor() {
        super();
        this.tasks = [];
        
    }

    addTask(task) {
        this.tasks.push(task);
        this.notify(this.tasks);
    }

    removeTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
        this.notify(this.tasks);
    }
}
