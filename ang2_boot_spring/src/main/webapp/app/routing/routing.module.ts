import { NgModule }       from '@angular/core';
//import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { PersonService } from './services/person.service';

import { RoutingComponent }    from './routing.component';
import { RoutigDetailComponent } from './routing_detail_1.component';
import { PersonDetailComponent }  from './routing_detail_1_2.component';
import { PersonExternalDetailComponent }  from './routing_detail_1_3.component';

import { RoutRoutingModule } from './rout_routing.module';

@NgModule({
  imports: [RoutRoutingModule,CommonModule,FormsModule],
  providers: [PersonService],
  declarations: [RoutingComponent,RoutigDetailComponent,PersonDetailComponent,PersonExternalDetailComponent]
})
export class RoutingModule {}