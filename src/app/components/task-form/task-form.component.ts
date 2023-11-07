import { Component, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit{
  tasks:Task[] = [];
  newTask:string = '';

  constructor(){}
  ngOnInit(): void {
  }
  addTask(){
    if(this.newTask.trim() !== ''){
      const newTasK:Task ={
        name:this.newTask,
        completed:false
      }
      this.tasks.push(newTasK);
      this.newTask = '';
    }
  }

}
