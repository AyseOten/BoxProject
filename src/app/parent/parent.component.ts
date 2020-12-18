import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contextmenu = false;
  contextMenuX = 0;
  contextMenuY = 0;

  @HostListener("click") onClick(){
    this.contextmenu = false;
  }

  @HostListener("contextmenu", ['$event']) onRightClick(event){
    this.contextMenuX = event.clientX;
    this.contextMenuY = event.clientY;
    //console.log(this.contextMenuX, this.contextMenuY);
    this.contextmenu = true;
    return false;
  }

}
