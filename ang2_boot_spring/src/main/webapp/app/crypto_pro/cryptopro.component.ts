import { Component } from '@angular/core';




@Component({
	  selector:'my-crypto',
	  //template: `<div><h1>TEST CRYPTO review</h1></div>
	  //<button routerLink="review">Go to sidekicks</button>
	  //`
	  templateUrl: './app/crypto_pro/cryptopro.component.html',
	  styleUrls: [ './app/crypto_pro/sources/demopage.css' ]
})
export class CryptoProComponent {
constructor(){
 	let head = document.getElementsByTagName('head').item(0);
	let s = document.createElement("script");
	s.type = "text/javascript";
	s.charset = "UTF-8";
	s.src = "./app/crypto_pro/sources/es6-promise.min.js";
	head.appendChild(s);
	
	s = document.createElement("script");
	s.type = "text/javascript";
	s.charset = "UTF-8";
	s.src = "./app/crypto_pro/sources/ie_eventlistner_polyfill.js";
	head.appendChild(s);
	
	s = document.createElement("script");
	s.type = "text/javascript";
	s.charset = "UTF-8";
	s.src = "./app/crypto_pro/sources/FileSaver.js";
	head.appendChild(s);
	
	s = document.createElement("script");
	s.type = "text/javascript";
	s.charset = "UTF-8";
	s.src = "./app/crypto_pro/sources/cadesplugin_api.js";
	head.appendChild(s);
	
	s = document.createElement("script");
	s.type = "text/javascript";
	s.charset = "UTF-8";
	s.src = "./app/crypto_pro/sources/Code.js";
	head.appendChild(s);
	
	s = document.createElement("script");
	s.type = "text/javascript";
	s.charset = "UTF-8";
	s.src = "./app/crypto_pro/sources/async_code.js";
	head.appendChild(s);
	
	s = document.createElement("script");
	s.type = "text/javascript";
	s.charset = "UTF-8";
	s.src = "./app/crypto_pro/sources/init_plagin.js";
	head.appendChild(s);

 }
 
 
 
 
 
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/