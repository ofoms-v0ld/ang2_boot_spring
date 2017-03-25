import { Component } from '@angular/core';

@Component({
	  selector:'books',
	  template: `
	    <nav>
	      <a routerLink="books_http" routerLinkActive="active">books http</a>
	      <a routerLink="right_menu" routerLinkActive="active">animate menu right</a>
	      <a routerLink="animate-header" routerLinkActive="active">animate header</a>
	    </nav>
	    <router-outlet></router-outlet>
  `,
})
export class OtherComponent {
 constructor(){
 	
 }


}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/