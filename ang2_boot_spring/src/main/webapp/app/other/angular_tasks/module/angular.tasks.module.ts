import { NgModule }       from '@angular/core';
//import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HttpModule }    from '@angular/http';

/*components*/
import { PaginationModule } from 'ng2-bootstrap';
import { AgularTasksComponent }    from '../components/angular.tasks.component';
import { BooksSuboneComponent }  from '../components/books/books.subone.component';
import { BooksSubtwoComponent }  from '../components/books/books.subtwo.component';
import { BooksSubthreeComponent }  from '../components/books/books.subthree.component';
import { ScheduleListComponent } from '../components/schedules/schedule-list.component';
import { ScheduleEditComponent } from '../components/schedules/schedule-edit.component';

import { RightMenuComponent }  from '../components/right_menu/right_menu.component';
import { RightMenuPanelComponent }  from '../components/right_menu/right_menu.panel.component';

import { AppAnimateHeaderComponent }  from '../components/animate_header/app.animate_header.component';
import { HeaderComponent } from '../components/animate_header/header.component';
import { TrackScrollDirective } from '../components/animate_header/directives/trackscroll.directive';

import { UsersAgularTasksComponent }    from '../components/users/user-list.component';
import { UsersCardAgularTasksComponent } from '../components/users/user-card.component';

import { ModalModule } from 'ng2-bootstrap';
import { SharedModule }      from '../../../shared/module/shared.module';

/*route*/
import { OtherRoutingModule } from '../route/other.routing.module';



@NgModule({
  imports: [
  			OtherRoutingModule,
  			CommonModule,
  			FormsModule,
  			HttpModule,
  			SharedModule,
  			PaginationModule.forRoot(),
  			ModalModule.forRoot()
  			],
  declarations: [
  	AgularTasksComponent,
  	BooksSuboneComponent,
  	BooksSubtwoComponent,
  	BooksSubthreeComponent,
  	RightMenuComponent,
  	RightMenuPanelComponent,
  	AppAnimateHeaderComponent,
  	HeaderComponent,
  	TrackScrollDirective,
  	UsersAgularTasksComponent,
  	UsersCardAgularTasksComponent,
  	ScheduleListComponent,
  	ScheduleEditComponent
  	]
})
export class AngularTasksModule {}