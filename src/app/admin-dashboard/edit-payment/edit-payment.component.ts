import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-edit-payment",
  templateUrl: "./edit-payment.component.html",
  styleUrls: ["./edit-payment.component.css"]
})
export class EditPaymentComponent implements OnInit {
  model: object = Object;
  id: number;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("hello");
    this.route.queryParams.subscribe(params => {
      let pid = params["id"];
      this.id = +pid;
      console.log("param id " + this.id);
    });

    this.gettingPaymentById();
  }

  gettingPaymentById() {
    this.auth.getPaymentById(this.id).subscribe(data => {
      this.model = data;
      console.log(this.model);
    });
  }

  updatingPaymentAndCommision() {
    this.auth.updatePaymentAndCommision(this.id, this.model).subscribe(() => {
      this.goBack();
    });
  }
  goBack() {
    this.router.navigate(["/admin-dashboard/all-payments"]);
  }
}
