import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';

import { AlertService } from './alert.service';
import { AuthGuard } from './auth.guard';
import { LocalStorageService } from './localStorage.service';
import { AuthenticationService } from './authentication.service';
import { NewsService } from './news.service';
import { PagerService } from './pager.service';

@NgModule({
  imports: [
      CommonModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  exports: [],
  declarations: [],
  providers: [
      LocalStorageService,
      AuthenticationService,
      NewsService,
      PagerService,
      AuthGuard,
      AlertService
  ]
})
export class CoreModule { }
