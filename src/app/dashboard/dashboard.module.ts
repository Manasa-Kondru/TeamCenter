import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { matmodules } from '../../material/material.module';

import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { UbiquitousModule } from '../ubiquitous/ubiquitous.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';





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
    UbiquitousModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
