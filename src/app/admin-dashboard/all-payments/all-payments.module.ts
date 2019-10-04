import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPaymentsRoutingModule } from './all-payments-routing.module';
import { AllPaymentsComponent } from './all-payments.component';


@NgModule({
  declarations: [AllPaymentsComponent],
  imports: [
    CommonModule,
    AllPaymentsRoutingModule
  ]
})
export class AllPaymentsModule { }
