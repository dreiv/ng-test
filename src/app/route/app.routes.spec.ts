import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

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
  bootstrap: [Home],
  exports: [TestComponent]
})
export class AppModule {
}

describe('Router tests', () => {
  let fixture: ComponentFixture<TestComponent>;

  //setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
  });

  //specs
  it('default route redirects home (async)', async(() => {
    const router = TestBed.get(Router);
    router.initialNavigation() // triggers default navigation

    fixture.whenStable().then(() => {
      expect(location.pathname.endsWith('/home')).toBeTruthy();
    });
  }));
});
