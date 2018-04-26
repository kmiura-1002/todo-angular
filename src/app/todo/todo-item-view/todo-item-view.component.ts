import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item-view',
  templateUrl: './todo-item-view.component.html',
  styleUrls: ['./todo-item-view.component.scss']
})
export class TodoItemViewComponent implements OnInit {

  @Input() private todoList: Todo[];

  constructor() { }

  ngOnInit() {
  }

}
