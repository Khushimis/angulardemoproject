import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  
  //declare an variable for creating the form
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("Please Enter Name", [Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      contact: new FormControl("Please Enter Contact", [Validators.required, Validators.pattern('[0-9]*')]),
      email: new FormControl("Please Enter Email", [Validators.required, Validators.email])
    })
  }
  AddUser(form) {
    alert("Hello");
    console.log(form.value);
    alert(form.value);
  }
}
