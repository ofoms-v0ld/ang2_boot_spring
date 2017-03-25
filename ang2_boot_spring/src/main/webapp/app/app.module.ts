/* I use a lazy-load for RoutingModule
   1. Comment import RoutingModule and comment include imports in NgClass
   2. Add in App-routing.ts path that power on RoutingModule
   3. And in rout_routing.ts change the path 'optrout' to '' instead. 
 */

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//bootstrap alert import part 1
import {AlertModule} from 'ng2-bootstrap';

/* component */
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { MycontactComponent }      from './mycontact/mycontact.component';
import { WebsocketComponent }      from './websocket_app/websocket.component';

/* sevices */
import { HeroService }          from './hero.service';

	/* app modules */
// comment and use lazy-load module	
//import { RoutingModule }      from './routing/routing.module';
import { CryptoProModule }      from './crypto_pro/crypto_pro.module';

	/*rout module*/
import { AppRoutingModule }     from './app-routing.module';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CryptoProModule,
    AlertModule.forRoot()
//  ,RoutingModule

  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    MycontactComponent,
    HeroesComponent,
    WebsocketComponent
  ],
  // for exclude the 404 error
  providers: [HeroService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  //providers: [ HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/