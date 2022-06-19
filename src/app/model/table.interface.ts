export enum TableStatus {
  AVAILABLE = 'available',
  ORDERED = 'ordered',
  FINISHED = 'finished',
  PAID = 'paid',
  ORDERING = 'ordering',
  CLEANING = 'cleaning',
}

export interface ITable {
  id: string;
  numberOfSeats: number;
  status: TableStatus;
  notify?: boolean;
  currentOrder?: string;
}

export const MOCK_TABLES: ITable[] = [
  {
    id: '1',
    numberOfSeats: 2,
    status: TableStatus.FINISHED,
  },
  {
    id: '2',
    numberOfSeats: 4,
    status: TableStatus.ORDERING,
  },
  {
    id: '3',
    numberOfSeats: 6,
    status: TableStatus.AVAILABLE,
  },
  {
    id: '4',
    numberOfSeats: 3,
    status: TableStatus.AVAILABLE,
  },
  {
    id: '5',
    numberOfSeats: 2,
    status: TableStatus.AVAILABLE,
  },
  {
    id: '6',
    numberOfSeats: 4,
    status: TableStatus.AVAILABLE,
  },
  {
    id: '7',
    numberOfSeats: 6,
    status: TableStatus.CLEANING,
  },
  {
    id: '8',
    numberOfSeats: 3,
    status: TableStatus.ORDERING,
  },
  {
    id: '9',
    numberOfSeats: 2,
    status: TableStatus.ORDERED,
  },
  {
    id: '10',
    numberOfSeats: 4,
    status: TableStatus.CLEANING,
  },
  {
    id: '11',
    numberOfSeats: 6,
    status: TableStatus.PAID,
  },
  {
    id: '12',
    numberOfSeats: 3,
    status: TableStatus.PAID,
  }
];
