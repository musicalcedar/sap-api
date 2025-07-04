export interface ItemDto {
  code: string;
  name: string;
  brand: string | number | null;
  price: number | null;
  stockByWarehouse: Array<{ warehouse: string; stock: number }>;
}
