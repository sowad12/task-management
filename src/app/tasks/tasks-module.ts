import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTask } from './new-task/new-task';
import { Tasks } from './tasks';
import { Task } from './task/task';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/card/shared-module';
@NgModule({
  declarations: [
    Tasks,
    Task,
    NewTask
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [Tasks]
})
export class TasksModule { }
