import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { SessionDetailComponent } from './sessions/session-detail/session-detail.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sessions', component: SessionsListComponent },
  { path: 'users', component: UsersComponent },
  { path: 'sessions/:sessionId', component: SessionDetailComponent },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
