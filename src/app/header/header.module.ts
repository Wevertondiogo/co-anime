import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [HeaderComponent, DialogComponent],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatTabsModule,
    MatDialogModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
