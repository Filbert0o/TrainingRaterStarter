import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, UserService } from '../users.service';

@Component({
    templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {

    user: IUser;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) { }

    ngOnInit() {
        let id: string | number = this.route.snapshot.paramMap.get('userId');
        // tslint:disable-next-line:radix
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
        if (id > 0) {
            // get from db
            this.userService.getUserById(id)
                .subscribe((user) => {
                    this.user = user;
                });
        } else {
            // new
            this.user = {
                id: 0,
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                number: ''
            };
        }
    }

    save(): void {
        if (!this.formValid()) {
            console.log('form invalid');
            return;
        }
        this.userService.save(this.user)
            .subscribe((user) => {
                this.router.navigate(['users']);
            });
    }

    private formValid(): boolean {
        return this.user.firstName && this.user.lastName && this.user.lastName && this.user.username && this.user.email ? true : false;
    }

    cancel(): void {
        this.router.navigate(['users']);
    }

}

