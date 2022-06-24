import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUiComponent } from './dashboard-ui/dashboard-ui.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { TableDetailsResolver } from './table-details.resolver';

const routes: Routes = [
  { path: '', component: DashboardUiComponent},
  {
    path: 'details/:id',
    component: TableDetailsComponent,
    resolve: {
      data: TableDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
