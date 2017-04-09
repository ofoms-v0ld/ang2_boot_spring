import { Component, OnInit, ViewContainerRef } from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'scheduler',
  templateUrl:'app.component.html',
  /*template: `
  	<alert type="success">
	    <nav>
	      <a routerLink="/" routerLinkActive="active">General</a>
	      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
	      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	      <a routerLink="/mycontact" routerLinkActive="active">My contact</a>
	      <a routerLink="/websoc" routerLinkActive="active">Websocket</a>
	      <a routerLink="cryptopro" routerLinkActive="active">CryptoPro</a>
	      <a routerLink="rout_module" routerLinkActive="active">Routing</a>
	      <a routerLink="other_module" routerLinkActive="active">Other</a>

	    </nav>
    </alert>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']*/
  
})
export class AppComponent {
 	
	constructor(private viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}


