import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";
import { Router } from '@angular/router';
@Component({
  selector: "app-user-notification",
  templateUrl: "./user-notification.component.html",
  styleUrls: ["./user-notification.component.css"]
})
export class UserNotificationComponent implements OnInit {
  acceptedTrainings: any;
  allData: any;
  rejectedTrainings:any;
  pendingRequest:any;
  lid:any;

  constructor(private auth: AuthService,public router:Router) {}

  ngOnInit() {
    console.log("in ng");
    this.getRequestStatus();
    let localid = localStorage.getItem('lid');

    this.lid = +localid;
    console.log(this.lid);
  }

  getRequestStatus() {
    console.log("in status");
    this.auth.getAllTrainings().subscribe(data => {
   console.log(data);
      this.allData = data;
      this.pendingRequest = _.where(this.allData,{rejectNotify:false,accept:false,userId : this.lid});
      console.log(this.pendingRequest);
      this.acceptedTrainings = _.where(this.allData,{rejectNotify:false,accept:true,userId : this.lid});
      console.log(this.acceptedTrainings);
      this.rejectedTrainings = _.where(this.allData,{rejectNotify:true,accept:false,userId: this.lid});
      console.log(this.rejectedTrainings);
    });
  }

  payment(id)
  {
    let data={
      trainingId :id
    }
    alert("click");
    this.router.navigate(["user-dashboard/payment"], {
      queryParams: data
    });
  }
}
