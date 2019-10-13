import {RouterModule, Routes} from '@angular/router';
import {CustomerPage} from './customer.page';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: 'tabs',
        component: CustomerPage,
        children: [
            {
                path: 'profile', children: [{
                    path: '',
                    loadChildren: './customer-profile/customer-profile.module#CustomerProfilePageModule'
                }]
            },
            {
                path: 'task', children: [{
                    path: '',
                    loadChildren: './customer-task/customer-task.module#CustomerTaskPageModule'
                },
                {
                    path: 'new',
                    loadChildren: './customer-task/new-task/new-task.module#NewTaskPageModule'
                },
                {
                    path: ':taskId',
                    loadChildren: './customer-task/task-detail/task-detail.module#TaskDetailPageModule'
                }]
            },
            {
                path: '',
                redirectTo: '/customer/tabs/profile',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/customer/tabs/profile',
        pathMatch: 'full'
    },
  { path: 'task-detail', loadChildren: './customer-task/task-detail/task-detail.module#TaskDetailPageModule' },
  { path: 'new-task', loadChildren: './customer-task/new-task/new-task.module#NewTaskPageModule' }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  CustomerRoutingModule {}
