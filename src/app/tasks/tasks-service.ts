import { Injectable } from '@angular/core';
import { TaskData } from '../../jsonData/dummy-tasks';
import { NewTaskModel, TaskModel } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
   userTasks:TaskModel[] = TaskData;
   
  getAllTasks() {
    return this.userTasks;
  } 
  getTaskByUserId(userId: string | undefined) {
     return TaskData.filter(task => task.userId === userId);
  }
  removeTask(id:string){
    return this.userTasks.filter(task => task.id !== id);
  }
  SubmitTask(newTask:NewTaskModel,userId:string | undefined) {
      this.userTasks.push({
        id: Date.now().toString(),
        userId: userId ? userId : 'unknown',
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      });
    }
  }
