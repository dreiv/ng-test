/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrialComponent } from './trial.component';
import { LanguagesHttpService } from '../service/languages-http.service';

describe('TrialComponent', () => {
  let fixture: ComponentFixture<TrialComponent>;
  let component: TrialComponent;    // to access properties and methods
  let element: any;                 // to access the DOM element

  // setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrialComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TrialComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
    });
  }));

  // specs
  xit('should create an instance of TrialComponent', () => {
    expect(component).toBeTruthy();
  });
});
