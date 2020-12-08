import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './views/home/pages/page-home/page-home.component';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'orders', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule) },
  { path: 'clients', loadChildren: () => import('./views/client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
