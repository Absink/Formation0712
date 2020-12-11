import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';

const routes: Routes = [
  { path: '', component: PageListOrderComponent, data: {title: 'Orders', subtitle: 'All Orders'} },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit/:id', component: PageAddOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
