import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div>
        <h1>{{counter}}</h1>
        <button (click)="change(1)">+1</button>
        <button (click)="change(-1)">-1</button>
    </div>`
})
export class CounterComponent {
  @Output() changes = new EventEmitter();
  counter: number = 0;

  change(increment) {
    this.counter += increment;
    this.changes.emit(this.counter);
  }
}
