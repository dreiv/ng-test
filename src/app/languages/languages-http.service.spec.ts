/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LanguagesHttpService } from './languages-http.service';
import { HttpModule, Response, XHRBackend, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('LanguagesHttpService', () => {
  let service: LanguagesHttpService;    // to access properties and methods
  let mockBackend: any;                 // to mock Http backend responses
  const mockResponse = ["en", "de", "fr"];

  //setup
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
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(mockResponse)})));
    });
  }));

  //specs
  it('should create an instance of LanguagesHttpService', () => {
    expect(service).toBeTruthy();
  });

  it('should return available languages (mocked)', async(() => {
    service.get().subscribe(languages => {
      expect(languages).toContain('en');
      expect(languages).toContain('de');
      expect(languages).toContain('fr');
      expect(languages.length).toEqual(3);
    });
  }));
});
