import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'header-animate-example',
  template: '<other-header></other-header><div style="height: 2048px; border: solid 1px #000;">Some scrollable content.</div>',
  directives: [HeaderComponent]
})
export class AppAnimateHeaderComponent { }
