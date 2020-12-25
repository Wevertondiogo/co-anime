import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from '../app/contact/contact.component';
import { AboutComponent } from '../app/about/about.component';
import { CategoryComponent } from '../app/category/category.component';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
