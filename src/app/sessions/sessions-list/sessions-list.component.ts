import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionsService, ISession } from '../sessions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit, OnDestroy {
  sessions: ISession[];
  constructor(
    private sessionsService: SessionsService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('Init in SessionsList');
    this.sessionsService.getSessions()
      .subscribe(
        (sessions) => this.sessions = sessions
      );
    // this.sessions = this.sessionsService.getSessions();
  }

  goToAdd(): void {
    this.router.navigate(['sessions/add']);
  }

  goToEdit(id: number): void {
    this.router.navigate([`sessions/${id}`]);
  }

  ngOnDestroy(): void {
    console.log('Destroy on SessionsList');
  }
}
