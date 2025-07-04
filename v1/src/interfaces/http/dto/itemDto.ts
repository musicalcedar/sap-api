export interface ItemDto {
  code: string;
  name: string;
  brand: number | null;
  price: number | null;
  stockByWarehouse: Array<{ warehouse: string; stock: number }>;
}
