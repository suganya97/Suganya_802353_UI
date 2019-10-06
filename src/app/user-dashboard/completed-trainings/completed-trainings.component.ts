import { Component, OnInit } from "@angular/core";
import * as _ from "underscore";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-completed-trainings",
  templateUrl: "./completed-trainings.component.html",
  styleUrls: ["./completed-trainings.component.css"]
})
export class CompletedTrainingsComponent implements OnInit {
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
