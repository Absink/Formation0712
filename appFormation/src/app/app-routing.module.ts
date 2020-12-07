import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListClientComponent } from './views/client/pages/page-list-client/page-list-client.component';
import { PageHomeComponent } from './views/home/pages/page-home/page-home.component';
import { PageListOrderComponent } from './views/order/pages/page-list-order/page-list-order.component';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'orders', component: PageListOrderComponent },
  { path: 'clients', component: PageListClientComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
