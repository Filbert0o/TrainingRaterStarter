import { NgModule } from '@angular/core';

import { SessionsService } from './sessions.service';
import { SessionRatingsService } from './session-rating/session-rating.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionRatingComponent } from './session-rating/session-rating.component';

@NgModule({
  declarations: [
      SessionsListComponent,
      SessionDetailComponent,
      SessionRatingComponent
  ],
  imports: [
      CommonModule,
      FormsModule
  ],
  providers: [
      SessionsService,
      SessionRatingsService
  ],
})
export class SessionsModule { }
