import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') form : NgForm;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(f : NgForm){
    const { email, pass, fname, lname, contact, dob, insurance } = f.value;
    this.authService.signup(email,pass,fname, lname, dob, contact, insurance);
    
  }

}
