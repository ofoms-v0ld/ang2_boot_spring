import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtherComponent }    from '../components/other.component';
import { BooksSuboneComponent }  from '../components/books/books.subone.component';
import { BooksSubthreeComponent }  from '../components/books/books.subthree.component';

import { RightMenuComponent }  from '../components/right_menu/right_menu.component';

import { AppAnimateHeaderComponent }  from '../components/animate_header/app.animate_header.component';


const cRoutes: Routes = [
  
  { path: '', redirectTo: 'other', pathMatch: 'full'},
  { path: 'other',    component: OtherComponent },
  { path: 'other/right_menu', component: RightMenuComponent },
  { path: 'other/animate-header', component: AppAnimateHeaderComponent },
  { path: 'other/books_http', component: BooksSuboneComponent },
  { path: 'other/books_http/subtwo/:id', component:  BooksSubthreeComponent}
];
@NgModule({
  imports: [RouterModule.forChild(cRoutes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }