import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header.component';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, DialogModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
