import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CustomerPage} from './customer.page';
import {CustomerRoutingModule} from './customer-routing.module';

const routes: Routes = [
  {
    path: '',
    component: CustomerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerPage]
})
export class CustomerPageModule {}
