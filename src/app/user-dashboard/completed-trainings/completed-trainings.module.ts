import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedTrainingsRoutingModule } from './completed-trainings-routing.module';
import { CompletedTrainingsComponent } from './completed-trainings.component';


@NgModule({
  declarations: [CompletedTrainingsComponent],
  imports: [
    CommonModule,
    CompletedTrainingsRoutingModule
  ]
})
export class CompletedTrainingsModule { }
