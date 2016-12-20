import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GreeterComponent } from './component/greeter.component';
import { LogClicksDirective } from './directive/log-clicks.directive';
import { CapitalisePipe } from './pipe/capitalise.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    LogClicksDirective,
    CapitalisePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
