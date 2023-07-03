import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'projects', loadChildren: () => import('src/app/dashboard/projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: "users", component: UsersComponent
      },
      {
        path: 'settings', loadChildren: () => import('src/app/dashboard/settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: '', redirectTo: 'projects', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
