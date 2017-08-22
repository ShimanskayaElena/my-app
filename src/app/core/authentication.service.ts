import { Injectable } from '@angular/core';

import { User } from '../shared/user/user.model';
import { LocalStorageService } from './localStorage.service';

@Injectable()
export class AuthenticationService {
    private user: User;
    private currentUser = 'current user'; // имя свойства, в которым будут сохранены данные о вошедшем пользователе в LocalStorage браузера

    constructor( private localStorageService: LocalStorageService) {}

    // предоставление данных о пользователе
    get(): User {
        return this.localStorageService.get(this.currentUser);
    }

    // при выходе пользователя из регистрации на сайте
    remove(): User {
        this.localStorageService.remove(this.currentUser);
        return this.get();
    }

    // сохранение данных о пользователе, зарегистрировавшемся на сайте
    set( user: User): User {
        this.user = user;
        if ( this.user.name === 'admin' && this.user.password === '1234') {
            this.user.access = true;
        } else {
            this.user.access = false;
        }

        this.localStorageService.set(this.currentUser, this.user);
        return this.get();
    }
}
