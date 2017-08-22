import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { PageNotFoundComponent } from './not-found.component';
import { AlertComponent } from './alert.component';
import { UserComponent } from './user/user.component';
@NgModule({
  imports: [ CommonModule ],
  declarations: [
      HighlightDirective,
      PageNotFoundComponent,
      AlertComponent,
      UserComponent
      ],
  exports: [
      HighlightDirective,
      PageNotFoundComponent,
      AlertComponent,
      UserComponent,
      CommonModule,
      FormsModule
      ]
})
export class SharedModule {}
