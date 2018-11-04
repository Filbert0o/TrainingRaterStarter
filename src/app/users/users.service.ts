import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  seedUsers =
  [
    { Name: 'Timothy', UserName: 'Timothy0o', Email: 't1@miles.com', Phone: '2155551111' },
    { Name: 'Andrew', UserName: 'Andrew0o', Email: 'a1@miles.com', Phone: '2155552222' },
    { Name: 'Filbert', UserName: 'Filbert0o', Email: 'f1@miles.com', Phone: '2155553333' }
  ];
  constructor() { }

  getSessions(): {}[] {
    return this.seedUsers;
  }
}
