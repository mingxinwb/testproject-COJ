import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { ProblemListComponent } from './components/problem-list/problem-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
