import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SessionsService } from './sessions/sessions.service';
import { UserService } from './users/users.service';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SessionsListComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [SessionsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
