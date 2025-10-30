import { Component, EventEmitter, output, Output } from '@angular/core';
import { TasksService } from '../tasks-service';


@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  title:string='';
  summary:string='';  
  dueDate:string='';

  @Output() cancel=new EventEmitter<void>();
  //@Output() formSubmit =new EventEmitter<NewTaskModel>();

  constructor(public taskService:TasksService) {}
  
  onCancel() {
     this.cancel.emit();
  }

  onSubmit(event:Event) {
    event.preventDefault();
   this.taskService.SubmitTask({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }, undefined);
    this.cancel.emit();
    // this.formSubmit.emit({
    //   title: this.title,
    //   summary: this.summary,
    //   dueDate: this.dueDate
    // });
  }
}
