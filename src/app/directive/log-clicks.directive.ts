import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appLogClicks]'
})
export class LogClicksDirective {
    counter = 0;
    @Output() changes = new EventEmitter();

    @HostListener('click', ['$event.target'])
    clicked(target) {
        console.log(`Click on [${target}]: ${++this.counter}`);
        this.changes.emit(this.counter);
    }
}
