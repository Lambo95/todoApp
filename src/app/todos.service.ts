import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosArray: Todo[] = [
    {
      id: 1,
      title: 'template',
      completed: false,
    },
  ];
  constructor() {}

  addTodo() {}
}
