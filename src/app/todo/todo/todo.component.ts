import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  private todo: Todo;
  private todoList: Todo[];

  constructor() {
    this.todo = {
      id: -1,
      value: '',
      description: '',
      deadline: null,
      status: 'unfinished',
      availability: false
    };
    this.todoList = [];
  }

  onSubmit(): void {
    console.log('onSubmit');
    this.todo.id =
      this.todoList.length > 0
        ? this.todoList[this.todoList.length - 1].id + 1 : 0;
    this.todoList.push(Object.assign({}, this.todo));
    this.todo = {
      id: -1,
      value: '',
      description: '',
      deadline: null,
      status: 'unfinished',
      availability: false
    };
  }

  ngOnInit() {
  }

}
