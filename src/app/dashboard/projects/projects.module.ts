import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectdataComponent } from './projectdata/projectdata.component';

import { LayoutComponent } from './layout/layout.component';
import { ProductdataComponent } from './productdata/productdata.component';

import { matmodules } from 'src/material/material.module';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { UbiquitousModule } from 'src/app/ubiquitous/ubiquitous.module';



@NgModule({
  declarations: [
    ProjectdataComponent,
  
    LayoutComponent,
    ProductdataComponent,
    ProductdetailComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ...matmodules,
    UbiquitousModule
  ]
})
export class ProjectsModule { }
