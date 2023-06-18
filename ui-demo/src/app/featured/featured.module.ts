import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceItemComponent } from './components/device-item/device-item.component';
import { SharedModule } from '../shared/shared.module';
import { DevicesComponent } from './components/devices/devices.component';
import { AppRoutingModule } from '../app-routing.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    SupportComponent,
    DeviceListComponent,
    DeviceItemComponent,
    DevicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    PipesModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    SupportComponent,
    DevicesComponent,
    DeviceListComponent,
    DeviceItemComponent
  ]
})
export class FeaturedModule { }
