import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Fname: string = "pooja";
  Lname: string = "pooja";
  Age: number = 30;
  Gender: string = "Female";
  constructor() { }

  ngOnInit(): void {
  }

}
