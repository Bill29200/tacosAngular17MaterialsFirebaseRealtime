import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//----------------------------------------------------------------
  public users :any ={
   admin:{password:'1234', roles:['ADMIN','SERVER','CLIENT']},
   server:{password:'1234', roles:['SERVER']},
   client:{password:'1234', roles:['CLIENT']}
  }
//----------------------------------------------------------------
  constructor() { }
//----------------------------------------------------------------
  public login(username:string, password:string): boolean
  {
    if (this.users[username] && this.users[username]['password']==password)
      {
        return true;
      } else
      {
        return false;
      }
  }
  //----------------------------------------------------------------
}
