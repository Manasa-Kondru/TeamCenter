import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsmenuComponent } from './settingsmenu/settingsmenu.component';
import { LayoutComponent } from './layout/layout.component';
import { DocumentComponent } from './document/document.component';
import { AppsComponent } from './apps/apps.component';
import { ProductComponent } from './product/product.component';
import { ProtocolComponent } from './protocol/protocol.component';
import { matmodules } from 'src/material/material.module';
import { UbiquitousModule } from 'src/app/ubiquitous/ubiquitous.module';



@NgModule({
  declarations: [
    SettingsmenuComponent,
    LayoutComponent,
    DocumentComponent,
    AppsComponent,
    ProductComponent,
    ProtocolComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ...matmodules,
    UbiquitousModule
  ]
})
export class SettingsModule { }
