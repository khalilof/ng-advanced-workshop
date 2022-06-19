import { Injectable } from '@angular/core';
import { KitchenService } from './kitchen.service';
import { ITable, MOCK_TABLES, TableStatus } from '../../../model/table.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  tables: ITable[] = [...MOCK_TABLES];

  constructor(private kitchenService: KitchenService) {
    this.kitchenService.setTables(this.tables);
  }

  getTables(): ITable[] {
    return this.tables;
  }

  getTable(id: string): ITable | undefined {
    return this.tables.find(t => t.id === id);
  }

  updateTable(table: ITable): void {
    const index = this.tables.findIndex(t => t.id === table.id);
    if (table.status === TableStatus.ORDERED) {
      this.kitchenService.startCookingForTable(table);
    } else {
      table.notify = false;
    }
    this.tables[index] = table;
  }

  notifyTable(table: ITable): void {
    const index = this.tables.findIndex(t => t.id === table.id);
    this.tables[index].notify = true;
  }


}
