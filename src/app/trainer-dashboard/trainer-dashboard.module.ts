import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerDashboardRoutingModule } from './trainer-dashboard-routing.module';
import { TrainerDashboardComponent } from './trainer-dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [TrainerDashboardComponent,NavbarComponent,FooterComponent],
  imports: [
    CommonModule,
    TrainerDashboardRoutingModule
  ]
})
export class TrainerDashboardModule { }
