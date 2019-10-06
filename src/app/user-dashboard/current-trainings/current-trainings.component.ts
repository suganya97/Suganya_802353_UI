import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";

@Component({
  selector: "app-current-trainings",
  templateUrl: "./current-trainings.component.html",
  styleUrls: ["./current-trainings.component.css"]
})
export class CurrentTrainingsComponent implements OnInit {
  curT: any;
  curT1: any;
  showProgressBar: boolean = false;
  startProgressBar: boolean = true;
  progressValue:number;
  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.getCurrentTraining();
    this.showProgressBar = false;
  }

  getCurrentTraining() {
    this.auth.getAllTrainings().subscribe(data => {
      this.curT1 = data;
      this.curT = _.where(this.curT1, { status: "current" });
      console.log(this.curT);
    });
  }

  selectProgress(id) {
    console.log(this.showProgressBar);
    console.log(this.startProgressBar);
    this.showProgressBar = true;
    this.startProgressBar = false;
  }
  saveProgress(id) {
    this.auth.changeProgress(id,this.progressValue).subscribe(data => {
        console.log("updated");
        this.getCurrentTraining();
        this.showProgressBar = false;
    this.startProgressBar = true;
    });


    // this.showProgressBar = false;
    // this.progressBar = true;
  }
}
