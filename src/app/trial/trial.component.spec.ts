import {TrialComponent} from "./trial.component";
import {TestBed, ComponentFixture, async} from "@angular/core/testing";
import {Observable} from "rxjs";
import {HelloService} from "./hello.service";

class MockHelloService {
  get(): Observable<any> {
    return Observable.of("hello");
  }
}

describe('TrialComponent', () => {
  let fixture: ComponentFixture<TrialComponent>;
  let component: TrialComponent;    // to access properties and methods
  let element: any;              // to access the DOM element

  // setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrialComponent]
    }).overrideComponent(TrialComponent, {
      set: {
        providers: [
          {provide: HelloService, useClass: MockHelloService}
        ]
      }
    });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TrialComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  // specs
  it('should create an instance of TrialComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve data from HelloService (mocked)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('hello');
    });
  }));
});
