import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('src/app/authentication/authentication.module').then((m) => m.AuthenticationModule) },
  { path: 'dashboard', loadChildren: () => import('src/app/dashboard/dashboard.module').then((m) => m.DashboardModule),  canActivate: [AuthGuard]},
  { path: '', redirectTo: 'auth', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
