import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('src/app/authentication/authentication.module').then((m) => m.AuthenticationModule) },
  { path: 'dashboard', loadChildren: () => import('src/app/dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
