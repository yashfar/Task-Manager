import { Component ,Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/constants/tasks.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  @Input() tasks: Task[] = [];

  todoTasks = this.tasks.filter(task => !task.completed);
  finishedTasks = this.tasks.filter(task => task.completed);

  removeTask(task:Task){
      const taskIndex = this.tasks.indexOf(task)
      if(taskIndex !== -1 ){
        this.tasks.splice(taskIndex , 1);
      }
  }
  toggleCompleted(task: Task){
    task.completed = !task.completed;
  }
}
