// filename: complexCode.js

/*
This code is a sophisticated implementation of a task scheduler.
It allows the user to add, remove, and prioritize tasks, and execute them in a specific order.
It also utilizes JavaScript ES6 features like classes and arrow functions for a more concise codebase.
*/

class Task {
  constructor(name, priority, callback) {
    this.name = name;
    this.priority = priority;
    this.callback = callback;
  }

  execute() {
    console.log(`Executing task: ${this.name}`);
    this.callback();
  }
}

class TaskScheduler {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    this.sortTasksByPriority();
  }

  removeTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
    this.sortTasksByPriority();
  }

  sortTasksByPriority() {
    this.tasks.sort((a, b) => b.priority - a.priority);
  }

  executeTasks() {
    this.tasks.forEach((task) => task.execute());
  }
}

// Create a task scheduler instance
const scheduler = new TaskScheduler();

// Add tasks with different priorities
scheduler.addTask(new Task("Task 1", 3, () => console.log("Task 1 executed")));
scheduler.addTask(new Task("Task 2", 1, () => console.log("Task 2 executed")));
scheduler.addTask(new Task("Task 3", 2, () => console.log("Task 3 executed")));

// Remove a task
scheduler.removeTask("Task 2");

// Execute the remaining tasks in order of priority
scheduler.executeTasks();

// Output:
// Executing task: Task 1
// Task 1 executed
// Executing task: Task 3
// Task 3 executed