import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";
import { Router, RouterModule, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  allPaymentData: any;
  lid: any;
  paramtrainingId: number;
  userInfo: any;
  skillInfo: any;

  constructor(
    private auth: AuthService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let localid = localStorage.getItem("lid");
    this.lid = +localid;
    this.getParamData();
  }

  getParamData() {
    this.route.queryParams.subscribe(params => {
      let id = params["trainingId"];
      this.paramtrainingId = +id;
      console.log(this.paramtrainingId);
      this.getTraining();
    });
  }

  getTraining() {
    console.log("in status");
    this.auth.getTrainingById(this.paramtrainingId).subscribe(data => {
      console.log(data);
      this.allPaymentData = data;

      // this.getById(this.allPaymentData.id);
      this.getSkillDetails(this.allPaymentData.skillId);
    });
  }

  // getById(id) {
  //   this.auth.getUserById(this.lid).subscribe(data => {
  //     this.userInfo = data;
  //   });
  // }

  getSkillDetails(id) {
    this.auth.getSkillById(id).subscribe(data => {
      this.skillInfo = data;
      console.log(this.skillInfo);
    });
  }

  savePayment(id) {
    let data = {
      userId: this.skillInfo.userId,
      trainerId: this.skillInfo.trainerId,
      skillId: this.skillInfo.skillId,
      fees: this.skillInfo.fees,
      commision: this.skillInfo.userId,
      skillName: this.skillInfo.skillName
    };

    this.auth.savePayment(data).subscribe(data => {
      console.log(data);
    });

    alert("click");
    // this.router.navigateByUrl("/user-dashboard/receipt?id=" + id);
  }
}
