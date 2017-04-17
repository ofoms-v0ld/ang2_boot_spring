/* I use a lazy-load for RoutingModule
   1. Comment import RoutingModule and comment include imports in NgClass
   2. Add in App-routing.ts path that power on RoutingModule
   3. And in rout_routing.ts change the path 'optrout' to '' instead. 
 */

import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { PaginationModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';
//import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';
import { SlimLoadingBarService, SlimLoadingBarComponent } from 'ng2-slim-loading-bar';
import { TimepickerModule } from 'ng2-bootstrap';

import { AppComponent }   from './app.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { MobileHideDirective } from './shared/directives/mobile-hide.directive';
import { ScheduleEditComponent } from './schedules/schedule-edit.component';
import { ScheduleListComponent } from './schedules/schedule-list.component';
import { UserCardComponent } from './users/user-card.component';
//import { UserListComponent } from './users/user-list.component';
import { RightMenuComponent } from './main/sadebar/right_menu.component';
import { RightMenuPanelComponent } from './main/sadebar/right_menu.panel.component';
import { TrackScrollDirective } from './shared/directives/trackscroll.directive';
import { HeaderComponent } from './main/header/header.component';

import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { MappingService } from './shared/utils/mapping.service';
import { NotificationService } from './shared/utils/notification.service';



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
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    HttpModule,
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    TimepickerModule.forRoot(),
//  ,RoutingModule

        

  ],
  declarations: [
  	AppComponent,
    DateFormatPipe,
    HighlightDirective,
    HomeComponent,
    MobileHideDirective,
    ScheduleEditComponent,
    ScheduleListComponent,
    SlimLoadingBarComponent,
    UserCardComponent,
    //UserListComponent,
    DashboardComponent,
    HeroDetailComponent,
    MycontactComponent,
    HeroesComponent,
    WebsocketComponent,
    RightMenuPanelComponent,
    RightMenuComponent,
    TrackScrollDirective,
    HeaderComponent
  ],
  // for exclude the 404 error
  providers: [
  	ConfigService,
	DataService,
	ItemsService,
	MappingService,
	NotificationService,
	SlimLoadingBarService
  	HeroService,
  	{provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/