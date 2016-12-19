/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LanguagesService } from './languages.service';

describe('LanguagesService', () => {
  let service: LanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguagesService]
    });
  });

  beforeEach(inject([LanguagesService], s => {
    service = s;
  }));

  it('should create LanguagesService', () => {
    expect(service).toBeTruthy();
  })

  it('should return the available Languages', () => {
    const languages = service.get();

    expect(languages).toContain('en');
    expect(languages).toContain('de');
    expect(languages).toContain('fr');
    expect(languages.length).toEqual(3);
  })

});
