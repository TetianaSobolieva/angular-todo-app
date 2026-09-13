import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoComponent } from './components/todo/todo';
import { Todo } from './types/todo';

const todos = [
  { id: 1, title: 'HTML + CSS', completed: true },
  { id: 2, title: 'JS', completed: true },
  { id: 3, title: 'React', completed: true },
  { id: 4, title: 'Angular', completed: true },
  { id: 5, title: 'Vue', completed: false },
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App {
  //добавляю властивість
  todos = todos;

  todoForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  get title() {
    return this.todoForm.get('title') as FormControl;
  }
// добавляю обчислювану властивість
  get ActiveTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }

  // створюю метод для створення Todo
  addTodo() {
    // якщо невалідне
    if (this.todoForm.invalid) {
      return;
    }

    //створюємо todo
    const newTodo: Todo = {
      id: Date.now(),
      title: this.title.value,
      completed: false,
    };

    this.todos.push(newTodo);
    this.todoForm.reset();
  }
}
