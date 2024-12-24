import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todoArray : Array<Itodos> = [
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onGetTodo(todo : Itodos){
    console.log(todo);
    this.todoArray.unshift(todo);
  }
}
