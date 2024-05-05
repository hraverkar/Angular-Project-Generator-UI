import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './dashboard/docs/docs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: "Dashboard"
  },
  {
    path: 'docs',
    component: DocsComponent,
    title: "Docs"
  },
  {
    path: '',
    component: DashboardComponent,
    title: "Dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
