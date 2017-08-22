import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../core/authentication.service';
import { AlertService } from '../core/alert.service';
import { User } from '../shared/user/user.model';

@Component({
  moduleId: module.id,
  templateUrl: 'authorization.component.html',
  styleUrls: ['authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
    user: User;

    constructor(
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private router: Router
    ) {}

    ngOnInit() {
        this.user = this.authenticationService.get();
    }

    // регистрация пользователя на сайте
    onSubmit(form: NgForm) {
        this.user.name = form.value.name;
        this.user.password = form.value.password;
        this.user = this.authenticationService.set( this.user);
        form.reset();

        if (this.user.access) {
            this.router.navigate(['/admin']);
        } else {
            this.alertService.success('Authorization was successful!', true);
        }
    }

    // отмена пользователем регистрации на сайте
    goOut() {
        this.router.navigate(['/home']);
    }
}
