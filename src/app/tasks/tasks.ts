import { Component, Input } from '@angular/core';
import { TaskModel } from './task.model';
import { TasksService } from './tasks-service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  isAddingTask = false;
  userTasks:TaskModel[] = []; 
  @Input({ required: true}) user!: { id: string; name: string; avatar: string; } | undefined;
  constructor(public tasksService: TasksService) {}

  ngOnInit(): void {
  this.userTasks = this.tasksService.getAllTasks();
  }

  get selectedUserTasks() {  
     return this.tasksService.getTaskByUserId(this.user?.id);
  }
  onCompleteTask(id:string) {
    this.tasksService.removeTask(id);
  }
  onAddNewTask() {
    this.isAddingTask = true;
  }
  onCancelNewTask() {
    this.isAddingTask = false;
  }
  // onSubmitTask(newTask:NewTaskModel) {
  //   this.tasksService.SubmitTask(newTask,this.user ? this.user.id : undefined);
  //   this.isAddingTask = false;
  // }
}
