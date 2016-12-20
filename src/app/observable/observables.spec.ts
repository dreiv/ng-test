import { Observable } from 'rxjs';
import { fakeAsync } from '@angular/core/testing';
describe('Observable', () => {
  var basic$;

  // setup
  beforeEach(() => {
    basic$ = new Observable(observer => {
      // pushing values
      observer.next(1);
      observer.next(2);
      observer.next(3);

      // complete stream
      observer.complete();
    });
  });

  // specs
  it('should create the expected sequence (fakeAsync/tick)', fakeAsync(() => {
    let expected = [1, 2, 3], index = 0;
    basic$.subscribe({
      next: x => expect(x).toEqual(expected[index++]),
      _: e => console.log(e)
    });
  }));
});
