import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlService } from './core/services/control.service';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', loadChildren: () =>import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'orders', canActivate: [ControlService], loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule) },
  { path: 'clients', canActivate: [ControlService], loadChildren: () => import('./views/client/client.module').then(m => m.ClientModule) },
  { path: 'users', canActivate: [ControlService], loadChildren: () => import('./views/user/user.module').then(m => m.UserModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
