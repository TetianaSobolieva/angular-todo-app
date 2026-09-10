import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

const todos = [
  { id: 1, title: 'HTML + CSS', completed: true },
  { id: 2, title: 'JS', completed: true },
  { id: 3, title: 'React', completed: true },
  { id: 4, title: 'Angular', completed: true },
  { id: 5, title: 'Vue', completed: false },
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-todo-app');
  editing = false;
  todos = todos;
}
