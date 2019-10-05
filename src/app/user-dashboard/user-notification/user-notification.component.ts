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

  constructor(private auth: AuthService,public router:Router) {}

  ngOnInit() {
    console.log("in ng");
    this.getRequestStatus();
  }

  getRequestStatus() {
    console.log("in status");
    this.auth.getAllTrainings().subscribe(data => {
   console.log(data);
      this.allData = data;
      this.pendingRequest = _.where(this.allData,{rejectNotify:false,accept:false,userId : 1});
      
      this.acceptedTrainings = _.where(this.allData,{rejectNotify:false,accept:true,userId : 1});
      console.log(this.acceptedTrainings);
      this.rejectedTrainings = _.where(this.allData,{rejectNotify:true,accept:false,userId:1 });
     
    });
  }

  payment(id)
  {
    alert("click");
    this.router.navigateByUrl("/user-dashboard/payment");
  }
}
