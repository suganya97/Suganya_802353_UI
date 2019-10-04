import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchTrainingsComponent } from './search-trainings.component';


const routes: Routes = [
  { path: '', component: SearchTrainingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchTrainingsRoutingModule { }
