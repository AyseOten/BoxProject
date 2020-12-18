import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() x=0;
  @Input() y=0;

}
