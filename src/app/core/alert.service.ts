import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false; // Сохранить после изменения навигации

    constructor(private router: Router) {
        // Очистить сообщение об изменении маршрута
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // Сохранить только для одного изменения местоположения
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
        window.setTimeout( () => { this.delete(); }, 3000);
    }

    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        window.setTimeout( () => { this.delete(); }, 3000);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    // удаляем  сообщение через 3 секунды
    delete() {
        return this.subject.next();
    }
}
