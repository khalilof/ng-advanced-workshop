import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUiComponent } from './dashboard-ui/dashboard-ui.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { FormsModule } from '@angular/forms';
import { TableDetailsComponent } from './table-details/table-details.component';


@NgModule({
  declarations: [
    DashboardUiComponent,
    DashboardItemComponent,
    TableDetailsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {
}
