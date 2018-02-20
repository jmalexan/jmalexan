import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TermInputComponent } from './term-input/term-input.component';
import { TermOutputComponent } from './term-output/term-output.component';


import { TermService } from "./term.service";


@NgModule({
  declarations: [
    AppComponent,
    TermInputComponent,
    TermOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TermService],
  bootstrap: [AppComponent]
})
export class AppModule { }
