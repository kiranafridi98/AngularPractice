import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './Mycomponents/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './Mycomponents/practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
