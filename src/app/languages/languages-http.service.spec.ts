/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LanguagesHttpService } from './languages-http.service';
import { HttpModule } from '@angular/http';

describe('LanguagesHttpService', () => {
  let service: LanguagesHttpService;    // to access properties and methods

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [LanguagesHttpService]
    });
  });

  beforeEach(inject([LanguagesHttpService], s => {
    service = s;
  }));

  it('should create the LanguagesHttpService', () => {
    expect(service).toBeTruthy();
  });

  it('should return the available languages', async(() => {
    service.get().subscribe(languages => {
      expect(languages).toContain('en');
      expect(languages).toContain('de');
      expect(languages).toContain('fr');
      expect(languages.length).toEqual(3);
    });
  }));
});
