import { SapItem } from '../../../domain/entities/sapItem';

export interface SapItemResponseDto {
  itemCode: string;
  itemName: string;
  manufacturer?: {
    code?: number;
    name?: string;
  };
  prices: {
    priceList: number;
    price: number;
    currency?: string;
  }[];
  stock: {
    warehouseCode: string;
    inStock: number;
    committed: number;
    ordered: number;
    available: number;
  }[];
  createdAt?: string;
  updatedAt?: string;
}

export const mapItemToDto = (item: SapItem): SapItemResponseDto => {
  return {
    itemCode: item.code,
    itemName: item.name,
    manufacturer: item.manufacturer
      ? {
          code: item.manufacturer.code,
          name: item.manufacturer.name,
        }
      : undefined,
    prices:
      item.prices?.map(price => ({
        priceList: price.listId,
        price: price.amount,
        currency: price.currency || undefined,
      })) || [],
    stock:
      item.stock?.map(warehouse => ({
        warehouseCode: warehouse.warehouseCode,
        inStock: warehouse.quantity,
        committed: warehouse.committed || 0,
        ordered: warehouse.ordered || 0,
        available: warehouse.available || 0,
      })) || [],
  };
};

export const mapItemsToDtos = (items: SapItem[]): SapItemResponseDto[] => {
  return items.map(mapItemToDto);
};
