import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.css']
})
export class AddBlockComponent implements OnInit {
  users: Object;
  mentors: Object;
  allUsers : any;
  showBlock:Boolean;
  showUnBlock:Boolean;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.getAllRegisteredUsersTypes();
  }

  onGetUser() {
    this.users = _.where(this.allUsers, {role: 3});
    this.mentors  = _.where(this.allUsers,{role:2});
    console.log(this.mentors);
  }

  getAllRegisteredUsersTypes()
  {
  this.auth.getAllRegisteredUsersType().subscribe(data=>
    {
      this.allUsers = data;
      this.onGetUser();
    });
  }

  block(id)
  {
    this.showUnBlock = true;
    this.showBlock = false;
    this.auth.blockId(id).subscribe(data=>
      {
        alert(data);
      })
  }
  unBlock(id)
  {
    this.showBlock = true;
    this.showUnBlock = false;
    this.auth.unBlockId(id).subscribe(data=>
      {
        alert(data);
      })
  }
}
