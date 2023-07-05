import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectdataComponent } from './projectdata/projectdata.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'projectdata', component: ProjectdataComponent
      },
      {
        path: ':client_id/productdata', component: ProductdataComponent
      },
      {
        path: ':client_id/productdetail', component: ProductdetailComponent
      }, {
        path: '', redirectTo: 'projectdata', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
