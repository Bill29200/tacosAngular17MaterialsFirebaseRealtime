import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServerComponent } from './components/server/server.component';
import { AuthGard } from './guards/auth.guard';
import { AuthorizationGard } from './guards/authorization.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'menu', component:MenuComponent,
      canActivate: [AuthGard],
      children : [
          {path:'admin', component:AdminComponent,
            canActivate:[AuthorizationGard],data : {roles:['ADMIN']}
          },
          {path:'server', component:ServerComponent,
            canActivate:[AuthorizationGard], data : {roles:['SERVER']}
          },
          {path:'client', component:ClientComponent,
            canActivate:[AuthorizationGard],data : {roles:['CLIENT']}
          },
          {path:'about', component:AboutComponent},
          {path:'home', component:HomeComponent},
  ]},



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
