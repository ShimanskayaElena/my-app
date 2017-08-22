import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'current-user',
    template: `
    <div>
        Hello, <strong>{{user.name}}</strong>!
        <button class="btn btn-default" [class.hide]="!hide" (click)="logIn()">Log in</button>
        <button class="btn btn-default" [class.hide]="hide" (click)="goOut()">Go out</button>
    </div>`,
    styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit, DoCheck {
    user: User;
    hide = false; // отвечает за визуализацию кнопки 'Go out'

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {}

    ngOnInit(): User {
        return this.user = this.authenticationService.get();
    }

    ngDoCheck(): User {
        this.user = this.authenticationService.get();
        if ( this.user.name === 'Visitor') {
           this.hide = true;
        } else {
            this.hide = false;
        }
        return this.user;
    }

    // зарегистрироваться на сайте
    logIn(): void {
        this.router.navigate(['../authorization']);
    }

    // отменить регистрацию на сайте
    goOut(): void {
        this.authenticationService.remove();
        this.router.navigate(['../home']);
    }
}
