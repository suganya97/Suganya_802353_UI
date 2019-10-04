import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',loadChildren:'src/app/home/home.module#HomeModule'},
  { path:'user-register',loadChildren:'./user-register/user-register.module#UserRegisterModule'},
  { path:'user-dashboard',loadChildren:'./user-dashboard/user-dashboard.module#UserDashboardModule'},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path:'trainer-register',loadChildren:'./trainer-register/trainer-register.module#TrainerRegisterModule'},
  { path:'trainer-dashboard',loadChildren:'./trainer-dashboard/trainer-dashboard.module#TrainerDashboardModule'},
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path:'admin-dashboard',loadChildren:'./admin-dashboard/admin-dashboard.module#AdminDashboardModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
