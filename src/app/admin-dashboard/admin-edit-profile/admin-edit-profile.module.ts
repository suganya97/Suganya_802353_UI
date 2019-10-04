import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEditProfileRoutingModule } from './admin-edit-profile-routing.module';
import { AdminEditProfileComponent } from './admin-edit-profile.component';


@NgModule({
  declarations: [AdminEditProfileComponent],
  imports: [
    CommonModule,
    AdminEditProfileRoutingModule
  ]
})
export class AdminEditProfileModule { }
