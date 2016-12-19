/* tslint:disable:no-unused-variable */

import { Component, EventEmitter, Output, DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { LogClicksDirective } from './log-clicks.directive';

@Component({
  selector: 'container',
  template: '<div log-clicks (changes)="changed($event)"></div>'
})
class TestContainer {
  @Output() changes = new EventEmitter();

  changed(value) {
    this.changes.emit(value);
  }
}

describe('LogClicksDirective', () => {
  let fixture: ComponentFixture<TestContainer>;
  let container: TestContainer;   // to access properties and methods
  let domElement: any;            // to access the DOM element
  let debugElement: DebugElement;   // testing helper

  //setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestContainer, LogClicksDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContainer);
    container = fixture.componentInstance;
    domElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  //specs
  it('should create the TestContainer', () => {
    expect(container).toBeTruthy();
  });
});
