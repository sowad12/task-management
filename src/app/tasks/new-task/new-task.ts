import { Component, EventEmitter, output, Output } from '@angular/core';
import { NewTaskModel } from '../task.model';


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
  @Output() formSubmit =new EventEmitter<NewTaskModel>();

  onCancel() {
     this.cancel.emit();
  }

  onSubmit(event:Event) {
    event.preventDefault();
    this.formSubmit.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    });
  }
}
