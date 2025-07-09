
export interface SapItem {
  code: string;
  name: string;

  manufacturerId: number | null;
  manufacturer?: {
    code: number;
    name: string;
  };

  prices: Array<{
    listId: number;
    amount: number;
    currency: string | null;
  }>;

  stock: Array<{
    warehouseCode: string;
    quantity: number;
    committed?: number;
    ordered?: number;
    available?: number;
  }>;
}
