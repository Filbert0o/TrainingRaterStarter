import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UserService } from './users.service';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
      CommonModule,
      FormsModule
  ],
  providers: [
    UserService,
  ],
})
export class UsersModule { }
