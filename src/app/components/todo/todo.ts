import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Todo } from '../../types/todo';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class TodoComponent {
  @Output() delete = new EventEmitter();

  @Input() todo!: Todo;

  editing = false;
}
