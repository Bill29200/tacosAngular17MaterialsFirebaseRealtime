import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  constructor(public authService : AuthService, private router: Router){}
  //----------------------------
logout() {
this.authService.logout();
this.router.navigateByUrl('/login');
}
//------------------------------------------
}
