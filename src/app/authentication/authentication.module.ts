import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { matmodules } from '../../material/material.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { CongratsComponent } from './congrats/congrats.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    OtpComponent,
    CongratsComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...matmodules

   
  ]
})
export class AuthenticationModule { }
