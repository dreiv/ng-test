import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { CounterComponent } from './event.component';

describe('Event', () => {
  let counter;

  // setup
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CounterComponent]
  }));

  beforeEach(inject([CounterComponent], c => {
    counter = c;
  }))

  // specs
  it('should create an instance of CounterComponent', () => {
    expect(counter).toBeTruthy();
  });

  it('should increment +1 (fakeAsync/tick)', fakeAsync(() => {
    counter.changes.subscribe(x => {
      expect(x).toBe(1);
    });
    counter.change(1);
    tick();
  }));

  it('should decrement -1 (fakeAsync/tick)', fakeAsync(() => {
    counter.changes.subscribe(x => {
      expect(x).toBe(-1);
    });
    counter.change(-1);
    tick();
  }));
});
