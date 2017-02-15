import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CryptoProComponent }    from './cryptopro.component';
import { CryptoProDetailComponent }  from './CryptoPro-detail.component';

import { CryptoProRoutingModule } from './cryptopro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CryptoProRoutingModule
  ],
  declarations: [
    CryptoProComponent,
    CryptoProDetailComponent
  ]
})
export class CryptoProModule {}