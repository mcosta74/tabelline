import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CdsModule } from '@cds/angular';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
