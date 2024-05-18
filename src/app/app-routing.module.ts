import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServerComponent } from './components/server/server.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'menu', component:MenuComponent, children : [
     {path:'server', component:ServerComponent},
     {path:'client', component:ClientComponent},
     {path:'about', component:AboutComponent},
       {path:'home', component:HomeComponent},
  ]},



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
