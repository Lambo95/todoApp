import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
})
export class FormListComponent implements OnInit {
  todosArray: Todo[] = [];
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosArray = this.todosService.todos;
  }

  removesTodoItem(id: number): void {
    this.todosService.removesTodo(id);
  }
}
