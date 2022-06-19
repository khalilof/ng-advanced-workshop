import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUiComponent } from './dashboard-ui/dashboard-ui.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardUiComponent,
    DashboardItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {
}
