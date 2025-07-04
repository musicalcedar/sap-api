import { SapItem } from '../types/item';
import { ItemDto } from '../../../interfaces/http/dto/itemDto';

export function mapSapItemToDto(item: SapItem): ItemDto {
  return {
    code: item.ItemCode,
    name: item.ItemName,
    brand: item.Manufacturer2?.ManufacturerName ?? item.Manufacturer,
    price: item.ItemPrices?.[0]?.Price ?? null,
    stockByWarehouse: (item.ItemWarehouseInfoCollection || []).map(wh => ({
      warehouse: wh.WarehouseCode,
      stock: wh.InStock,
    })),
  };
}
