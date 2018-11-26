import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// TODO TF: why do I have to do this for map to come in
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface ISession {
  id: number;
  name: string;
  location: string;
  startTime: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class SessionsService {
  // sessionsMock = [{ Name: 'John Teaches Angular', Location: 'Miles-U 1' },
  // { Name: 'Scott Teaches AWS', Location: 'Miles-U 2' },
  // { Name: 'Jack Teaches PODIS', Location: 'Jacks Desk' },
  // ];
  constructor(
    private http: HttpClient,
  ) { }

  getSessions(): Observable<ISession[]> {
    // return this.sessionsMock;
    return this.http.get<ISession[]>('http://localhost:3000/sessions')
      .map((sessions) => {
        sessions.forEach((session) => {
          const startTime = new Date(session.startTime);
          startTime.setHours(startTime.getHours() - (startTime.getTimezoneOffset() / 60));
          session.startTime = startTime.toISOString();
        });
        return sessions;
      });
  }

  getSessionById(id: number): Observable<ISession> {
    return this.http.get<ISession>(`http://localhost:3000/sessions/${id}`);
  }

  save(session: ISession): Observable<ISession | number[]> {
    if (session.id) {
      return this.http.put<number[]>('http://localhost:3000/sessions', session);
    } else {
      return this.http.post<ISession>('http://localhost:3000/sessions', session);
    }
  }
}

