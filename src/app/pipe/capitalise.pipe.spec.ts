/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CapitalisePipe } from './capitalise.pipe';

describe('CapitalisePipe', () => {
  let pipe: CapitalisePipe;

  // setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapitalisePipe]
    }).compileComponents();
  });

  beforeEach(inject([CapitalisePipe], p => {
    pipe = p;
  }));

  // specs
  it('should create an instance of CapitalisePipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should work with an empty string', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('should capitalise', () => {
    expect(pipe.transform('wow')).toEqual('WOW');
  });

  it('should throw exceptions when called wrong', () => {
    // arrow functions must be used in expect to capture exceptions
    expect(() => pipe.transform(undefined)).toThrow();
    expect(() => pipe.transform()).toThrow();
    expect(() => pipe.transform()).toThrowError('Requires a String as input');
  });

});
