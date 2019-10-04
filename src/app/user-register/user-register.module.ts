import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegisterRoutingModule } from './user-register-routing.module';
import { UserRegisterComponent } from './user-register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRegisterRoutingModule
  ]
})
export class UserRegisterModule { }
