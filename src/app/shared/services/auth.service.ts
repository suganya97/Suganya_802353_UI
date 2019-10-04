import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

 
  public getAllRegisteredUsersType() {
    return this.http.get('https://localhost:44307/api/getAll');
  }

   
  public getUserById(id) {
    return this.http.get('https://localhost:44307/api/user/'+id);
  }


  public searchTrainings(data) {
    return this.http.get('https://localhost:44307/api/getSearchData?trainerTechnology='+data);
  }

  public getAllTrainings()
  {
    console.log("inside service");
    return this.http.get('https://localhost:44307/api/allTrainingDetails');
  }

  public trainingDetails(data)
  {
    console.log(data);
    return this.http
      .post(
        'https://localhost:44307/api/enrollTraining',
        data,
        httpOptions
      )
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public registerUser(regData) {
    return this.http
      .post(
        'https://localhost:44307/api/register',
        regData,
        httpOptions
      )
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  
  public getTechno()
  { 
    return this.http.get('https://localhost:44307/api/getTech');
  }


  public removingTechnology(id)
  {
    return this.http.delete('https://localhost:44307/api/DeleteSkillById/'+id,httpOptions)
    .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public blockId(id)
  {
    return this.http.put('https://localhost:44307/api/block/'+id,httpOptions)
    .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }
  
  public unBlockId(id)
  {
    return this.http.put('https://localhost:44307/api/unblock/'+id,httpOptions)
    .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public loginUser(email,password) {
    
    return this.http
      .get(
        'https://localhost:44307/api/login?Email='+email+"&Password="+password,
        httpOptions
      )
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public addTechnology(tech)
  {
    console.log(tech);
    return this.http
      .post(
        'https://localhost:44307/app/addTech',
        tech,
        httpOptions
      )
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }




}
