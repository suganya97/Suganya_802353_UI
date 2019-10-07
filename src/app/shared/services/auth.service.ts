import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

const httpOptions1 = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class AuthService {

  token:string;
  
  private loggedIn = false;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorizaton": this.token
    })
  };

  constructor(private http: HttpClient) {}

  public getAllRegisteredUsersType() {
    return this.http.get("https://localhost:44307/api/getAll");
  }

  public getAllPayment() {
    return this.http.get("https://localhost:44307/api/allPayment");
  }

  public getUserById(id) {
    return this.http.get("https://localhost:44307/api/user/" + id);
  }
  public getPaymentById(id)
  {
    return this.http.get("https://localhost:44307/api/getPaymentById/" + id);
  }

  public updatePaymentAndCommision(id,model) {
    console.log("in update")
    return this.http
      .put("https://localhost:44307/api/updatePaymentAndCommision/"+id,model,httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }



  public searchTrainings(data) {
    return this.http.get(
      "https://localhost:44307/api/getSearchData?trainerTechnology=" + data
    );
  }

  public getTrainingById(id) {
    return this.http.get("https://localhost:44307/api/training/" + id);
  }

  public getTechno() {
    return this.http.get("https://localhost:44307/api/getTech");
  }

  public getSkillById(id) {
    return this.http.get("https://localhost:44307/api/skill/" + id);
  }

  public getAllTrainings() {
    console.log("inside service");
    return this.http.get("https://localhost:44307/api/allTrainingDetails");
  }

  public trainingDetails(data) {
    console.log(data);
    return this.http
      .post("https://localhost:44307/api/enrollTraining", data, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public savePayment(data) {
    console.log(data);
    return this.http
      .post("https://localhost:44307/api/savePayment", data, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public registerUser(regData) {
    return this.http
      .post("https://localhost:44307/api/register", regData, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public removingTechnology(id) {
    return this.http
      .delete("https://localhost:44307/api/DeleteSkillById/" + id, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public changeTrainingPaymentStatus(id) {
    return this.http
      .put(
        "https://localhost:44307/api/trainingPaymentStatus/" + id,
        httpOptions1
      )
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public changeTrainingStatus(id) {
    return this.http
      .put("https://localhost:44307/api/trainingStatus/" + id, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }
  public changeProgress(id,progressValue) {
    return this.http
      .put("https://localhost:44307/api/changeProgress?id=" + id + "&progressValue=" + progressValue,  httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public acceptStatus(id) {
    return this.http
      .put("https://localhost:44307/api/acceptStatus/" + id, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public rejectStatus(id) {
    return this.http
      .put("https://localhost:44307/api/rejectStatus/" + id, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public blockId(id) {
    return this.http
      .put("https://localhost:44307/api/block/" + id, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public unBlockId(id) {
    return this.http
      .put("https://localhost:44307/api/unblock/" + id, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public loginUser(email, password) {
    let data =
    {
      email:email,
      password :password
    }
    return this.http
      .post(
        "https://localhost:44307/api/login",data,
        httpOptions1
      )
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  storeUserData(token, email, role) {
    this.token = token;
    localStorage.setItem("id_token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("email",email);
  }

  isLoggedIn() {
    if (localStorage.getItem("id_token")) {
      return (this.loggedIn = true);
    }
  }
  logout() {
    this.token = null;
    localStorage.clear();
    this.loggedIn = false;
  }

  public addTechnology(tech) {
    console.log(tech);
    return this.http
      .post("https://localhost:44307/app/addTech", tech, httpOptions1)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }
}
