import { Component, OnInit } from '@angular/core';
import { TermService } from '../term.service';

@Component({
  selector: 'app-term-input',
  templateUrl: './term-input.component.html',
  styleUrls: ['./term-input.component.css']
})
export class TermInputComponent implements OnInit {

  cmdInput: string = "";

  constructor(private termService: TermService) {}

  ngOnInit() {
  }

  executeCommand(cmd: string) {
    this.cmdInput = ""
    this.termService.execute(cmd);
  }

}
