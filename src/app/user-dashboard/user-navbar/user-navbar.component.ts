import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as _ from "underscore";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  lid: number;
  role: number;
  userData: any;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    let localid = localStorage.getItem("lid");
    this.lid = +localid;
    console.log(this.lid);
    this.auth.getUserById(this.lid).subscribe(data => {
      this.userData = data;
    });
  }

  notification() {
    if (this.userData.role === 1) {
      alert("No Notification Yet");
    } else if (this.userData.role === 2) {
      this.router.navigateByUrl("/trainer-dashboard/trainer-notification");
    } else if (this.userData.role == 3) {
      this.router.navigateByUrl("/user-dashboard/user-notification");
    } else {
      console.log("Invalid User");
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["home"]);
    alert("Loggedout successfully!!");
  }
  
}
