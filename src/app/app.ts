import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

const todos = [
  { id: 1, title: 'HTML + CSS', completed: true },
  { id: 2, title: 'JS', completed: true },
  { id: 3, title: 'React', completed: true },
  { id: 4, title: 'Angular', completed: true },
  { id: 5, title: 'Vue', completed: false },
];

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  editing = false;
  todos = todos;
  title = '';

  get ActiveTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
  addTodo() {
    if (!this.title) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: this.title,
      completed: false,
    };

    this.todos.push(newTodo);
    this.title = '';
  }
}
