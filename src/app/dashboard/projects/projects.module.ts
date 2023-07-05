import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectdataComponent } from './projectdata/projectdata.component';

import { LayoutComponent } from './layout/layout.component';
import { ProductdataComponent } from './productdata/productdata.component';

import { matmodules } from 'src/material/material.module';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { UbiquitousModule } from 'src/app/ubiquitous/ubiquitous.module';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProjectdataComponent,
  
    LayoutComponent,
    ProductdataComponent,
    ProductdetailComponent,
    AddClientComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ...matmodules,
    UbiquitousModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
