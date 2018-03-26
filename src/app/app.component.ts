import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = "Angular Homework";
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  finishedEditing() {
    this.selectedTask = null;
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  priorityColor(currentTask) {
    if (currentTask.done === true) {
      return "doneEditing"
    }
    if(currentTask.priority === 1) {
      return "bg-info";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else if (currentTask.priority === 3) {
      return "bg-danger";
    }
  }

  tasks: Task[] = [
    new Task('Finish ya homework', 1),
    new Task('Begin thinking about jabascript projects', 2),
    new Task('Add a readme', 3)
  ];

  addTask(description, priority) {
    let newTask = new Task(description, priority);
    this.tasks.push(newTask);
  }
}
