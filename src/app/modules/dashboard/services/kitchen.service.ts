import { Injectable } from '@angular/core';
import { IMeal } from '../../../model/meal.interface';
import { ITable } from '../../../model/table.interface';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  meals: IMeal[] = [];
  tablesRef: ITable[] = [];

  constructor() {
  }

  setTables(tables: ITable[]) {
    this.tablesRef = tables;
  }

  startCookingForTable(table: ITable) {
    const meal = {
      id: 1,
      tableId: table.id,
      status: 'pending',
      mealInfo: table.currentOrder,
    } as IMeal;
    this.addMeal(meal);
    this.startCooking(meal)
  }

  addMeal(meal: IMeal): void {
    this.meals.push(meal);
  }

  updateMeal(meal: IMeal): void {
    const index = this.meals.findIndex(m => m.id === meal.id);
    this.meals[index] = meal;
  }

  removeMeal(meal: IMeal): void {
    const index = this.meals.findIndex(m => m.id === meal.id);
    this.meals.splice(index, 1);
  }

  getMeals(): IMeal[] {
    return this.meals;
  }

  getMeal(id: number): IMeal | undefined {
    return this.meals.find(m => m.id === id);
  }

  getMealByTableId(tableId: string): IMeal | undefined {
    return this.meals.find(m => m.tableId === tableId);
  }

  getMealByStatus(status: 'pending' | 'ready'): IMeal[] {
    return this.meals.filter(m => m.status === status);
  }

  notifyTable(tableId: string): void {
    const index = this.tablesRef.findIndex(t => t.id === tableId);
    this.tablesRef[index].notify = true;
  }

  private startCooking(meal: IMeal) {
    setTimeout(() => {
      this.updateMeal({
        ...meal,
        status: 'ready'
      });
      this.notifyTable(meal.tableId)
    }, 5000);
  }
}
