import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTrainingsRoutingModule } from './search-trainings-routing.module';
import { SearchTrainingsComponent } from './search-trainings.component';
import { FormsModule } from '@angular/forms';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [SearchTrainingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    SearchTrainingsRoutingModule
  ]
})
export class SearchTrainingsModule { }
