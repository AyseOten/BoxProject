import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDirectives]'
})
export class MyDirectivesDirective {

  constructor(private item: ElementRef) { 
    //item.nativeElement.style.backgroundColor = "red";
  }

  @HostListener("contextmenu", ['$event']) onRightClick(event){
    this.item.nativeElement.click();
  }
}
