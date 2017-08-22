import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AdminModule} from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ BrowserModule,
             HttpModule,
             FormsModule,
             AdminModule,
             HomeModule,
             AboutModule,
             SharedModule,
             CoreModule,
             AuthorizationModule,
             AppRoutingModule ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
