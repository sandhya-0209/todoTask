import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodos } from '../../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
 
  @ViewChild('todoItem') todoItem !: ElementRef;
  @Output() emitToDoObj : EventEmitter<Itodos> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

  onTodoAdd(){
    // Create ToDo Object
     let todoObj : Itodos = {
         todoItem : this.todoItem.nativeElement.value,
         todoId : this.generateUuid()
     }
    this.todoItem.nativeElement.value = '';
    // Emit ToDo Object to parent by using eventEmitter.
    this.emitToDoObj.emit(todoObj)
  }

}
