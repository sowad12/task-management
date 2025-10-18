import { Component, Input } from '@angular/core';
import { TaskData } from '../../jsonData/dummy-tasks';
import { NewTaskModel, TaskModel } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  userTasks:TaskModel[] = TaskData;
  isAddingTask = false;
  @Input({ required: true}) user!: { id: string; name: string; avatar: string; } | undefined;
  get selectedUserTasks() {
    return this.user ? TaskData.filter(task => task.userId === this.user?.id) : [];
  }
  onCompleteTask(id:string) {
    this.userTasks = this.userTasks.filter(task => task.id !== id);
  }
  onAddNewTask() {
    this.isAddingTask = true;
  }
  onCancelNewTask() {
    this.isAddingTask = false;
  }
  onSubmitTask(newTask:NewTaskModel) {

    this.userTasks.push({
      id: Date.now().toString(),
      userId: this.user ? this.user.id : 'unknown',
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    });
    this.isAddingTask = false;
  }
}
