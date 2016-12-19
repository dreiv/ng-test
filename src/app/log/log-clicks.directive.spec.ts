import { Component, EventEmitter, Output } from '@angular/core';
import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { LogClicksDirective } from './log-clicks.directive';

@Component({
  selector: 'container',
  template: '<div log-clicks (changes)="changed($event)"></div>'
})
class TestComponent {
  @Output() changes = new EventEmitter();

  changed(value) {
    this.changes.emit(value);
  }
}

describe('LogClicksDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;   // to access properties and methods
  let domElement: any;                // to access the DOM element

  //setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LogClicksDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    domElement = fixture.nativeElement;
  });

  //specs
  it('should create the TestComponent', () => {
    expect(testComponent).toBeTruthy();
  });

  it('should increment the counter', fakeAsync(() => {
    let div = domElement.querySelector('div');

    testComponent.changes.subscribe(x => {
      expect(x).toBe(1);
    });           // set up subscriber
    div.click();  // trigger a click on the test element
    tick();       // execute all pending asynchronous calls
  }));
});
