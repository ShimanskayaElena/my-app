import { Injectable } from '@angular/core';

import { User } from '../shared/user/user.model';

@Injectable()
export class LocalStorageService {

    set(property: string, value: User): void {
        localStorage.setItem(property, JSON.stringify(value));
    }

    remove(property: string): void {
        localStorage.removeItem(property);
    }

    get(property: string): User {

        if (localStorage.getItem(property)) {
            return JSON.parse(localStorage.getItem(property));
        } else {
            return new User('Visitor', '', false);
        }
    }

    clear(): void {
        localStorage.clear();
    }
}
