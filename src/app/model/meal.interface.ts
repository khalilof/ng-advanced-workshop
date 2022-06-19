export interface IMeal {
  id: number;
  tableId: string;
  mealInfo: string;
  status: 'pending' | 'ready';
}
