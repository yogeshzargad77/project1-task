import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public myForm: any;
  constructor(private ser: ServicedataService, private fb:FormBuilder) { }
  isSubmitted : boolean =false;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname :[''],
      lname :[''],
      email :['' ,[Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      pass :[''],
      cpass :[''],
    
    
    })
    
  }

  onSubmitForm(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    this.isSubmitted=true;
    
    
  }
    
  get f(){
    return this.myForm.controls;
  }

}
