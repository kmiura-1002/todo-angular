import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() private todo: Todo;
  @Input() private todoList: Todo[];

  constructor() { }

  ngOnInit() {
  }

  expiration(): boolean {
    if (!this.todo.deadline) {
      return false;
    }
    return new Date() > new Date(this.todo.deadline);
  }

  changeStatus(): void {
    this.todo.status = this.todo.status === 'finished' ? 'unfinished' : 'finished';

  }

  deleteTodo(id): void {
    const getIndex = (value, arr, prop) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    };
    const deleteIndex = getIndex(id, this.todoList, 'id');
    this.todoList.splice(deleteIndex, 1);
  }

}
