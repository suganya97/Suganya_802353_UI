import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.css']
})
export class AddRemoveComponent implements OnInit {
  techAdd: FormGroup;
  submitted = false;
  techInfo: String;
  skillData: Object;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.techAdd = this.fb.group({
      name: ['', [Validators.required]],
      toc: ['', [Validators.required]],
      prerequisites: ['', [Validators.required]]
    });

    this.getTechnology();
  }

  getTechnology() {
    console.log("hello")
    this.auth.getTechno().subscribe(data => {
      console.log(data);
      this.skillData = data;
    });
  }

  removeTech(id) {
    this.auth.removingTechnology(id).subscribe(data => {
      this.techInfo = data;
      console.log(data);
      this.getTechnology();
    })

  }

  addingTechnology() {
    this.submitted = true;
    if (this.techAdd.invalid) {
      return;
    }

    this.auth.addTechnology(this.techAdd.value).subscribe(data => {

      console.log(data);
      this.techInfo = data;
      this.getTechnology();
    });

    console.log(this.techInfo)

  }

}
