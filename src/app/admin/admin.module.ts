import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsComponent } from './news/news.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports:      [ SharedModule, AdminRoutingModule ],
    declarations: [ AdminComponent, AdminDashboardComponent, AllNewsComponent, NewsComponent ],
    exports:      [ AdminComponent ],
    providers:    []
})
export class AdminModule {}
