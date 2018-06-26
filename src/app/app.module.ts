import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BirthdayComponent } from './birthday/birthday.component';
import { BirthdayModule } from './birthday/birthday.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BirthdayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
