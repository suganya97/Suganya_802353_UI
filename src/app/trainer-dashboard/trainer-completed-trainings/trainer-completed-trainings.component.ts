import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-trainer-completed-trainings',
  templateUrl: './trainer-completed-trainings.component.html',
  styleUrls: ['./trainer-completed-trainings.component.css']
})
export class TrainerCompletedTrainingsComponent implements OnInit {

  compT: any;
  compT1: any;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.getCurrentTraining();
  }

  getCurrentTraining() {
    this.auth.getAllTrainings().subscribe(data => {
      this.compT1 = data;
      this.compT = _.where(this.compT1, { status: "completed" });
      console.log(this.compT);
    });
  }
}