import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { MycontactComponent }      from './mycontact/mycontact.component';
import { WebsocketComponent }      from './websocket_app/websocket.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'mycontact', component: MycontactComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'websoc',     component: WebsocketComponent },
  { path: 'rout_module',    loadChildren: 'app/routing/routing.module#RoutingModule'},
  { path: 'other_module',    loadChildren: 'app/other/module/other.module#OtherModule'}
];  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
