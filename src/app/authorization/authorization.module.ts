import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AuthorizationComponent } from './authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';

@NgModule({
    imports:      [ SharedModule, AuthorizationRoutingModule ],
    declarations: [ AuthorizationComponent ],
    exports:      [ AuthorizationComponent ],
    providers:    []
})
export class AuthorizationModule {}
