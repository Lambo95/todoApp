import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  createTodo(obj: Todo): void {
    this.todosService.addTodo(obj);
  }
}
