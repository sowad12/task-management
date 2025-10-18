import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from '../task.model';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
 @Input({ required: true}) task!:TaskModel;
 @Output() onComplete = new EventEmitter<string>();

 onCompleteTask() {  
   this.onComplete.emit(this.task.id);
 }
}
