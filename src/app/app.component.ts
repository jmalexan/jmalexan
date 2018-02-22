import { Component, ElementRef, ViewChild } from '@angular/core';

import { TermInputComponent } from './term-input/term-input.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(TermInputComponent) terminput: TermInputComponent;

  focusInput() {
    this.terminput.focusInput();
  }
}
