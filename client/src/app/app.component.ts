import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The title being pulled to the html page from the app component...known as interpolation';
  users : any;
  myVal = 5;

  constructor(private http:HttpClient) {}
  ngOnInit(){
    this.getUsers();
  }

  getUsers()
  {
    this.http.get('https://localhost:5001/api/users').subscribe(
      response => { this.users = response},
      error => {console.log(error)}
      );
  }

  submitInfo()
  {
    console.log("SubmitInfo");
  }
}
