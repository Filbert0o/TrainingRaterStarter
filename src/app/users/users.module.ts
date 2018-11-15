import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UserService } from './users.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
      CommonModule,
  ],
  providers: [
    UserService,
  ],
})
export class UsersModule { }
