import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { matmodules } from '../../material/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { UbiquitousModule } from '../ubiquitous/ubiquitous.module';
import { AddUserComponent } from './add-user/add-user.component';





@NgModule({
  declarations: [
    LayoutComponent,
    UsersComponent,
    AddUserComponent,
   
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ...matmodules,
    UbiquitousModule
  
  ]
})
export class DashboardModule { }
