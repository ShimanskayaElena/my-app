import { Component } from '@angular/core';

import { UserComponent } from './shared/user/user.component';
import { LocalStorageService } from './core/localStorage.service';
import { AuthenticationService } from './core/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [ LocalStorageService, AuthenticationService ],
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    color = '#b176b1';
}
