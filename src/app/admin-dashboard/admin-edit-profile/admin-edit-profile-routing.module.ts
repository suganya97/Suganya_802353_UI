import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEditProfileComponent } from './admin-edit-profile.component';


const routes: Routes = [
{path:'',component:AdminEditProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEditProfileRoutingModule { }
