import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`
})
class TestComponent {
}

@Component({
  selector: 'home',
  template: `<h1>Home</h1>`
})
export class Home {
}

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [TestComponent, Home],
  bootstrap: [TestComponent],
  exports: [TestComponent]
})
export class AppModule {
}

describe('Router tests', () => {
  let fixture: ComponentFixture<TestComponent>;
  let router: Router;

  //setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), AppModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      router = TestBed.get(Router);
    });
  }));

  //specs
  it('should have the default route set to home (async)', fakeAsync(() => {
    router.initialNavigation(); // triggers default navigation
    tick();
    expect(location.pathname.endsWith('/home')).toBeTruthy();
  }));

  it('should be able to navigate to home', fakeAsync(() => {
    router.navigate(['/home'])
      .catch(e => console.log(e));
    tick();
    expect(location.pathname.endsWith('/home')).toBeTruthy();
  }));

  it('should redirect non existing urls to home', fakeAsync(() => {
    router.navigate(['/undefined/route'])
      .catch(e => console.log(e));
    tick();
    expect(location.pathname.endsWith('/home')).toBeTruthy();
  }));
});
