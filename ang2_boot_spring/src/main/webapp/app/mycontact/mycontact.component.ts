import { Component } from '@angular/core';



@Component({
	  selector:'my-contact',
	  templateUrl: './app/mycontact/mycontact.component.html'
})
export class MycontactComponent {
 constructor(){
 	let head = document.getElementsByTagName('head').item(0);
	let s = document.createElement("script");
	s.type = "text/javascript";
	s.src = "./app/mycontact/test.js";
	head.appendChild(s);
 }


}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/