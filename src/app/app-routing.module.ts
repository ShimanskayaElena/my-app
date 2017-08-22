import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/not-found.component';
import { UserComponent } from './shared/user/user.component';

export const routes: Routes = [
 { path: 'about/:id', loadChildren: 'app/about/about.module#AboutModule'},
 { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
 { path: 'authorization', loadChildren: 'app/authorization/authorization.module#AuthorizationModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
