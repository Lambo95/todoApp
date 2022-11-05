import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoClass } from '../todo-class';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  arrayTodos: TodoClass[] = [];
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  createTodo(objTxt: String): void {
    this.todosService.addTodo(objTxt);
  }
}
