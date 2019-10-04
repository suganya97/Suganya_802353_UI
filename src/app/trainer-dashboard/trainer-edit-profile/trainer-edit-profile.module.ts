import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerEditProfileRoutingModule } from './trainer-edit-profile-routing.module';
import { TrainerProfileComponent } from '../trainer-profile/trainer-profile.component';


@NgModule({
  declarations: [TrainerProfileComponent],
  imports: [
    CommonModule,
    TrainerEditProfileRoutingModule
  ]
})
export class TrainerEditProfileModule { }
