import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminDashboardRoutingModule } from "./admin-dashboard-routing.module";
import { AdminDashboardComponent } from './admin-dashboard.component';

import { Router } from "@angular/router";
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@NgModule({
  declarations: [
   AdminDashboardComponent,
   NavbarComponent,
   FooterComponent,
  ],
  imports: [CommonModule, AdminDashboardRoutingModule]
})
export class AdminDashboardModule {}
