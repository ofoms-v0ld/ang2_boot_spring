import { Component } from '@angular/core';
import {$WebSocket} from '../../node_modules/angular2-websocket/angular2-websocket.js' ;



@Component({

	  selector:'my-websoc',
	  template: `
	    Counter Value is: {{counter}}
		<button type="button" (click)="subscribe($event)">Subscribe to WebSocket</button>
	    `
})
export class WebsocketComponent {

counter: string = 'not known';
  ws: $Websocket;
  constructor() {
    this.ws = new $WebSocket("ws://localhost:9090/counter");
  }

  subscribe($event) {
    console.log("trying to subscribe to ws");
    this.ws = new $WebSocket("ws://localhost:9090/counter");
    this.ws.send("Hello");
    this.ws.getDataStream().subscribe(
      res => {
        var count = JSON.parse(res.data).value;
        console.log('Got: ' + count);
        this.counter = count;
      },
      function(e) { console.log('Error: ' + e.message); },
      function() { console.log('Completed'); }
    );
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/