import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

@NgModule({
    imports: [RouterModule.forChild([
      { path: 'about/:id', component: AboutComponent}
    ])],
    exports: [RouterModule]
})
export class AboutRoutingModule {}
