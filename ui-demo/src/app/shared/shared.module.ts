import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { AppRoutingModule } from '../app-routing.module';
import { PipesModule } from './pipes/pipes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavLinkComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    PipesModule,
 ],
  exports: [
    NavLinkComponent
  ]
})
export class SharedModule { }
