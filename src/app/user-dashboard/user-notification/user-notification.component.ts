import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";
@Component({
  selector: "app-user-notification",
  templateUrl: "./user-notification.component.html",
  styleUrls: ["./user-notification.component.css"]
})
export class UserNotificationComponent implements OnInit {
  acceptedTrainings: any;
  allData: any;
  rejectedTrainings:any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    console.log("in ng");
    this.getRequestStatus();
  }

  getRequestStatus() {
    console.log("in status");
    this.auth.getAllTrainings().subscribe(data => {
      console.log(data);
      this.allData = data;
      this.acceptedTrainings = _.where(this.allData,{accept:false});
      console.log(this.acceptedTrainings);
      this.rejectedTrainings = _.where(this.allData,{rejectNotify:false});
      console.log(this.rejectedTrainings);
    });
  }
}
