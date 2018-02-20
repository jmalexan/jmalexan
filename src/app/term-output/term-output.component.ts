import { Component, OnInit } from '@angular/core';
import { TermService } from '../term.service';

@Component({
  selector: 'app-term-output',
  templateUrl: './term-output.component.html',
  styleUrls: ['./term-output.component.css']
})
export class TermOutputComponent implements OnInit {

  constructor(public termService: TermService) { }

  ngOnInit() {
  }

}
