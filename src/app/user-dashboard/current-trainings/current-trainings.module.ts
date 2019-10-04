import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTrainingsRoutingModule } from './current-trainings-routing.module';
import { CurrentTrainingsComponent } from './current-trainings.component';


@NgModule({
  declarations: [CurrentTrainingsComponent],
  imports: [
    CommonModule,
    CurrentTrainingsRoutingModule
  ]
})
export class CurrentTrainingsModule { }
