import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CardUploadComponent } from './components/card-upload/card-upload.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ServerComponent } from './components/server/server.component';
import { environment } from './environments/environment';
import { AuthGard } from './guards/auth.guard';
import { AuthorizationGard } from './guards/authorization.guard';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ServerComponent,
    ClientComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    LoginComponent,
    CardUploadComponent,
    ProductFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatListModule,


    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [
    provideAnimationsAsync(),
    AuthGard,
    AuthorizationGard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
