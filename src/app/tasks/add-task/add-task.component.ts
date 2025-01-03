import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../model/new-task.type';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();
 
  enteredTitle = '';
  enteredSummary='';
  enteredDate ='';
  private taskService = inject(TaskService);


  closeAddTaskDialog() {
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
