import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './featured/components/home/home.component';
import { DeviceListComponent } from './featured/components/device-list/device-list.component';
import { DeviceItemComponent } from './featured/components/device-item/device-item.component';
import { SupportComponent } from './featured/components/support/support.component';
import { DevicesComponent } from './featured/components/devices/devices.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    data: {breadcrumb:'home'},
  },
  {
    path: 'devices',
    component: DevicesComponent,
    data: { breadcrumb: 'devices' },
    children: [
      { 
        path: '', 
        component: DeviceListComponent, 
        data: { breadcrumb: '' } },
      { 
        path: ':name', 
        component: DeviceItemComponent, 
        data: { breadcrumb: 'Device' } },
    ]
  },
  {
    path: 'support',
    component: SupportComponent,
    data: { breadcrumb: 'support' },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { breadcrumb: 'home' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }