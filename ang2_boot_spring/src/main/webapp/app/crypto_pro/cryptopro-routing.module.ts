import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CryptoProComponent }    from './cryptopro.component';
import { CryptoProDetailComponent }  from './CryptoPro-detail.component';


const cryptoRoutes: Routes = [
  { path: 'cryptopro',  component: CryptoProComponent },
  { path: 'cryptopro/review', component: CryptoProDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(cryptoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CryptoProRoutingModule { }