import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServerComponent } from './components/server/server.component';
import { environment } from './environments/environment';
import { AuthGard } from './guards/auth.guard';
import { AuthorizationGard } from './guards/authorization.guard';

// const firebaseConfig = {
//   apiKey: "AIzaSyCOsJnTLe88Au9pdjphttShAvfUZJZMp4k",
//   authDomain: "tacosit-0.firebaseapp.com",
//   databaseURL: "https://tacosit-0-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "tacosit-0",
//   storageBucket: "tacosit-0.appspot.com",
//   messagingSenderId: "89253593023",
//   appId: "1:89253593023:web:bd3de80da39e4295f02b0a"
// };

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ServerComponent,
    ClientComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    LoginComponent

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

    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [
    provideAnimationsAsync(),
    AuthGard,
    AuthorizationGard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
