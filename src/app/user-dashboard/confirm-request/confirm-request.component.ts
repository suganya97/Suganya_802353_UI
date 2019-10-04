import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";

@Component({
  selector: "app-confirm-request",
  templateUrl: "./confirm-request.component.html",
  styleUrls: ["./confirm-request.component.css"]
})
export class ConfirmRequestComponent implements OnInit {
  paramId: number;
  trainerTechnology: string;
  trainerData: any;
  skillData: any;
  skill: any;
  showRequestedCourse;any;

  timeSlot: string;
  startDate: Date;
  endDate: Date;
  userName: string;
  email: string;
  name: string;
  fees: string;
  prerequisites: string;
  yourName:string;
  request:Boolean;
  requestSent:any;

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    this.getParamData();
    this.getById();
    this.getTech();
  }

  getParamData() {
    this.route.queryParams.subscribe(params => {
      this.paramId = params["id"];
      this.trainerTechnology = params["trainerTechnology"];
      console.log(this.paramId + "  " + this.trainerTechnology);
    });
  }

  getById() {
    this.auth.getUserById(this.paramId).subscribe(data => {
      this.trainerData = data;
      console.log(this.trainerData);
    });
  }

  getTech() {
    this.auth.getTechno().subscribe(data => {
      this.skill = data;
      this.skillData = _.findWhere(this.skill, {
        name: this.trainerTechnology
      });

      console.log(this.skillData.id);
    });
  }

  onSave() {
    let data = {
      timeSlot: this.timeSlot,
      startDate: this.startDate,
      endDate: this.endDate,
      fees: this.skillData.fees,
      skillId:this.skillData.id,
      skillName : this.skillData.name,
      userId: 1,
      userName:this.yourName,
      trainerId:this.paramId,
      mentorName: this.trainerData.userName,
      email: this.trainerData.email,
      accept:false
    };

    this.auth.trainingDetails(data).subscribe(data=>
    {
        alert("request sent");
    });

  }
}
