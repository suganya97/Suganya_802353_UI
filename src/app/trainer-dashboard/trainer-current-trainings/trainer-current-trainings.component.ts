import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-trainer-current-trainings',
  templateUrl: './trainer-current-trainings.component.html',
  styleUrls: ['./trainer-current-trainings.component.css']
})
export class TrainerCurrentTrainingsComponent implements OnInit {

  curT: any;
  curT1: any;
  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.getCurrentTraining();
  }

  getCurrentTraining() {
    this.auth.getAllTrainings().subscribe(data => {
      this.curT1 = data;
      this.curT = _.where(this.curT1, { status: "current" });
      console.log(this.curT);
    });
  }
}