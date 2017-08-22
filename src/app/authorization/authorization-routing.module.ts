import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthorizationComponent } from './authorization.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'authorization', component: AuthorizationComponent}
    ])],
    exports: [RouterModule]
})
export class AuthorizationRoutingModule {}
