import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService) { }

  UserLogin: FormGroup;
  submitted = false;
  
  
  ngOnInit() {
    this.UserLogin=this.fb.group({
   
      Email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password:['',[Validators.required,Validators.minLength(4)]]
  
    });
  }
  
  onSubmit(){
    this.submitted = true;
    if (this.UserLogin.invalid) {
        return;
    }

    
    this.auth.loginUser(this.UserLogin.value.Email,this.UserLogin.value.Password).subscribe(data1 => {
      
      console.log(data1);
        if (data1.userInfo.active === true) {
        this.auth.storeUserData(data1.userInfo.token, data1.userInfo.email, data1.userInfo.role);
        localStorage.setItem('lid',data1.userInfo.id);
          alert("success");
          if (data1.userInfo.role === 1) {
            this.router.navigateByUrl('/admin-dashboard/dashboard');
          } else if (data1.userInfo.role === 2 ) {
            this.router.navigateByUrl('/trainer-dashboard/tdashboard');
          } else {
            this.router.navigateByUrl('/user-dashboard/udashboard');
          }
        } 
        else {
         alert("Account Block By Admin");
        }

    });

  }
  

}
