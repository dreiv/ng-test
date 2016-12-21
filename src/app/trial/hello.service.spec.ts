/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HelloService } from './hello.service';
import { HttpModule, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('HelloService', () => {
  let service: HelloService;
  let mockBackend: any;       // to mock Http backend responses
  let mockResponse: string = "hello";

  // setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HelloService, {provide: XHRBackend, useClass: MockBackend}]
    });
  });

  beforeEach(inject([HelloService, XHRBackend], (_service, _mockBackend) => {
    service = _service;
    mockBackend = _mockBackend;
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(mockResponse)})));
    });
  }))

  // specs
  it('should create an instance of HelloService', () => {
    expect(service).toBeTruthy();
  });

  it('should return requested string (mocked)', () => {
    service.get().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
  });
});
