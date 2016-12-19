/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LanguagesHttpService } from './languages-http.service';
import { HttpModule, Response, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('LanguagesHttpService', () => {
  let service: LanguagesHttpService;    // to access properties and methods
  let mockBackend: any;                 // to mock Http backend responses

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        LanguagesHttpService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  beforeEach(inject([LanguagesHttpService, XHRBackend], (_service, _mockBackend) => {
    service = _service;
    mockBackend = _mockBackend;
  }));

  it('should create the LanguagesHttpService', () => {
    expect(service).toBeTruthy();
  });

  it('should return the available languages (mocked)', async(() => {
    let response = ["en", "de", "fr"];

    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response({body: JSON.stringify(response)}));
    });

    service.get().subscribe(languages => {
      expect(languages).toContain('en');
      expect(languages).toContain('de');
      expect(languages).toContain('fr');
      expect(languages.length).toEqual(3);
    });
  }));
});
