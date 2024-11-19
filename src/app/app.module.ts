import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app/app-routing.module';

@NgModule({
  imports: [
    BrowserModule, AppComponent, AppRoutingModule 
  ],
  providers: [],
})
export class AppModule { }
