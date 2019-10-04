import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [UserDashboardComponent,NavbarComponent,FooterComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
