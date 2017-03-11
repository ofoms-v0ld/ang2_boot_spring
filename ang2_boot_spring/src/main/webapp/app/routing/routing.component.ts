import { Component } from '@angular/core';



@Component({
	  selector:'my-contact',
	  template: `
	    <nav>
	      <a routerLink="/" routerLinkActive="active">General</a>
	      <a routerLink="detail_1" routerLinkActive="active">Detail 1</a>
	    </nav>
	    <router-outlet></router-outlet>
  `,
})
export class RoutingComponent {
 constructor(){
 	
 }


}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/