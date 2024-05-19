import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//----------------------------------------------------------------
  public users :any ={
   admin:{password:'1234', roles:['ADMIN','SERVER']},
   server:{password:'1234', roles:['SERVER']},
   client:{password:'1234', roles:['CLIENT']}
  }

  public username :any;
  public isAuthenticated : boolean = false;
  public roles : string []=[];

//----------------------------------------------------------------
  constructor() { }
//----------------------------------------------------------------
  public login(username:string, password:string): boolean
  {
    if (this.users[username] && this.users[username]['password']==password)
      {
        this.username = username;
        this.isAuthenticated = true;
        this.roles = this.users[username]['roles'];
        return true;
      } else
      {
        this.username='';
        this.isAuthenticated= false;
        this.roles = [];

        return false;
      }
  }
  //----------------------------------------------------------------
  logout() {
    this.isAuthenticated=false;
    this.username = undefined;
    this.roles=[];
  }
}
