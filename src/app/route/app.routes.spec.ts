import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
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
  it('default route redirects home (async)', async(() => {
    router.initialNavigation() // triggers default navigation

    fixture.whenStable().then(() => {
      expect(location.pathname.endsWith('/home')).toBeTruthy();
    });
  }));
});
