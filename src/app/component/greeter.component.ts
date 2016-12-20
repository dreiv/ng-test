import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  template: `<h2>Hello {{name}}!</h2>`
})
export class GreeterComponent {
  @Input() name: string;
}
