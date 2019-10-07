import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tech: string;
  showSearchData: Object;
  status1: boolean = false;
  status2: boolean = false;

  skillData: Object;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.getTechnology();
    console.log("get tech");
    this.status1 = false;
    this.status2 = false;
  }

  getTechnology() {
    console.log("hello");
    this.auth.getTechno().subscribe(data => {
      this.skillData = data;
    });
  }


  onSubmit() {
    console.log(this.tech);
    this.auth.searchTrainings(this.tech).subscribe(data => {
      this.showSearchData = data;

      if (Object.keys(this.showSearchData).length > 0) {
        this.status1 = false;
        this.status2 = true;
      } else {
        this.status1 = true;
        this.status2 = false;
      }
      console.log(this.showSearchData);
    });
  }

  
  navToSearch()
  {
    this.router.navigateByUrl("/search-trainings");
  }

}

