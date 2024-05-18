
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  public loginForm! : FormGroup;
   public authentication = true;
  //-------------------------------------------------
  constructor(private fb : FormBuilder, private authService : AuthService, private router : Router){}
  //-------------------------------------------------
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
    });
  }
  //------------------------------------------------
login() {
 let username = this.loginForm.value.username;
 let password = this.loginForm.value.password;
 let auth:boolean = this.authService.login(username, password);
 console.log("AUTH = ",auth)
 if(auth==true)
  {
    this.authentication = true;
     this.router.navigateByUrl("/menu");

  }
  else
  {
    this.authentication = false;
    this.loginForm = this.fb.group({
      username : "",
      password : ""
    });
  }


}
//----------------------------------------------
}
