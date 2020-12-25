import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersRoutingModule } from './customers-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./../app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./../app/category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./../app/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./../app/contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [CustomersRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
