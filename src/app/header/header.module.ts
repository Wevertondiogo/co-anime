import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header.component';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatButtonModule,

    DialogModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
