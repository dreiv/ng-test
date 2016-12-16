/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreeterComponent } from './greeter.component';
import { element } from 'protractor';

describe('GreeterComponent', () => {
  let fixture: ComponentFixture<GreeterComponent>;
  let greeter: GreeterComponent;    // to access properties and methods
  let domElement: any;              // to access the DOM element
  let debugElement: DebugElement;   // testing helper

  const correctText = 'Hello World!';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GreeterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    greeter = fixture.componentInstance;
    domElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  it('should create GreeterComponent', () => {
    expect(greeter).toBeTruthy();
  });

  it('should render `Hello World!` (async)', async(() => {
    greeter.name = 'World';

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(domElement.querySelector('h2').innerText).toBe(correctText);
      expect(debugElement.query(By.css('h2')).nativeElement.innerText).toBe(correctText);
    });
  }));

  it('should render `Hello World!` (fakeAsync/tick)', fakeAsync(() => {
    greeter.name = 'World';

    fixture.detectChanges();
    tick();   // execute all pending asynchronous calls
    expect(domElement.querySelector('h2').innerText).toBe(correctText);
    expect(debugElement.query(By.css('h2')).nativeElement.innerText).toBe(correctText);
  }));

  it('should render `Hello World!` (done)', done => {
    greeter.name = 'World';

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(domElement.querySelector('h2').innerText).toBe(correctText);
      expect(debugElement.query(By.css('h2')).nativeElement.innerText).toBe(correctText);
      done();
    });
  })

});
