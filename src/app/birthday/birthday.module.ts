import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirthdayComponent } from './birthday.component';
import { BirthdayManagerService } from './birthday-manager.service';


@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [BirthdayManagerService]
})
export class BirthdayModule { }
