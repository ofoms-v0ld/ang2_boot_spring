import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingComponent}    from './routing.component';
import { RoutigDetailComponent }  from './routing_detail_1.component';
import { PersonExternalDetailComponent }  from './routing_detail_1_3.component';


const cRoutes: Routes = [
  
  { path: '', redirectTo: 'optrout', pathMatch: 'full'},
  { path: 'optrout',    component: RoutingComponent },
  { path: 'optrout/detail_1', component: RoutigDetailComponent },
  { path: 'optrout/detail_1/detail_2/:id', component:  PersonExternalDetailComponent}
];
@NgModule({
  imports: [RouterModule.forChild(cRoutes)],
  exports: [RouterModule]
})
export class RoutRoutingModule { }