import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContextComponent } from './context/context.component';
import { ParentComponent } from './parent/parent.component';
import { MyDirectivesDirective } from './directives/my-directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContextComponent,
    ParentComponent,
    MyDirectivesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
