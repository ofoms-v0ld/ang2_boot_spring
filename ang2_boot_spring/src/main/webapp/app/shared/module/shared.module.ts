import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { DateFormatPipe }         from '../pipes/date-format.pipe';
import { DatepickerModule } from 'ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap';

@NgModule({
  imports:      [ CommonModule,DatepickerModule.forRoot(),TimepickerModule.forRoot() ],
  declarations: [ DateFormatPipe ],
  exports:      [ DateFormatPipe,
                  CommonModule,
                   FormsModule,
                   DatepickerModule,
                   TimepickerModule ]
})
export class SharedModule { }