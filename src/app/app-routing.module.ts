import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'worker', loadChildren: './worker/worker.module#WorkerPageModule' },
  { path: 'worker-profile', loadChildren: './worker/worker-profile/worker-profile.module#WorkerProfilePageModule' },
  { path: 'worker-task', loadChildren: './worker/worker-task/worker-task.module#WorkerTaskPageModule' },
  { path: 'customer-profile', loadChildren: './customer/customer-profile/customer-profile.module#CustomerProfilePageModule' },
  { path: 'customer-task', loadChildren: './customer/customer-task/customer-task.module#CustomerTaskPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
