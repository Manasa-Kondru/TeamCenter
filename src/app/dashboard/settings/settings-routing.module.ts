import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SettingsmenuComponent } from './settingsmenu/settingsmenu.component';
import { DocumentComponent } from './document/document.component';
import { ProductComponent } from './product/product.component';
import { ProtocolComponent } from './protocol/protocol.component';
import { AppsComponent } from './apps/apps.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent,
    children: [
      {
        path:'settingsmenu',component:SettingsmenuComponent
      },
      {
        path: '',redirectTo:'settingsmenu',pathMatch:'full'
      },
      {
        path:'document', component: DocumentComponent
      },
      {
        path:'product',component:ProductComponent
      },
      {
        path:'protocol',component:ProtocolComponent
      },
      {
        path:'apps',component:AppsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
