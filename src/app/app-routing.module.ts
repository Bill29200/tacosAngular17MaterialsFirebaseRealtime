import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { ServerComponent } from './components/server/server.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent},
  {path:'server', component:ServerComponent},
  {path:'client', component:ClientComponent},
  {path:'about', component:AboutComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
