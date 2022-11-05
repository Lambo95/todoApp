import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'template',
      completed: false,
    },
  ];
  constructor() {}

  addTodo(obj: Todo): void {
    this.todos.push(obj);
  }

  removesTodo(id: number) {
    this.todos.splice(id, 1);
  }
}
