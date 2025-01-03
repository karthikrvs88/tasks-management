import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { type NewTask } from '../model/new-task.type';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  showAddTask = false;

  constructor(private tasksService: TaskService) {}

  get SelectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  OnStartAddTask() {
    this.showAddTask = true;
  }

  closeAddTaskDialog() {
    this.showAddTask = false;
  }

  OnAddTask(newtask: NewTask) {
    this.tasksService.addTask(newtask, this.userId);
    this.showAddTask = false;
  }
}
