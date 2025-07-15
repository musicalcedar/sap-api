import { SapItemsRepository } from '../../../domain/repositories/SapItemsRepository';
import { SapItem } from '../../../domain/entities/sapItem';
import { SapSession } from '../../../domain/entities/sapSession';
import { sapHttpService } from '../services/sapHttpService';

// Función de mapeo para convertir los datos crudos de SAP a la entidad de dominio
const mapToSapItem = (raw: any): SapItem => {
  return {
    code: raw.ItemCode,
    name: raw.ItemName,
    manufacturerId: raw.Manufacturer,
    manufacturer: raw.Manufacturer2
      ? {
          code: raw.Manufacturer2.Code,
          name: raw.Manufacturer2.ManufacturerName,
        }
      : undefined,
    prices:
      raw.ItemPrices?.map((price: any) => ({
        listId: price.PriceList,
        amount: price.Price,
        currency: price.Currency || null,
      })) || [],
    stock:
      raw.ItemWarehouseInfoCollection?.map((warehouse: any) => ({
        warehouseCode: warehouse.WarehouseCode,
        quantity: warehouse.InStock,
        committed: warehouse.Committed,
        ordered: warehouse.Ordered,
        available: warehouse.InStock - warehouse.Committed,
      })) || [],
  };
};

export const sapItemRepository: SapItemsRepository = {
  async getItems(session: SapSession, top: number = 20, skip: number = 0): Promise<SapItem[]> {
    const url = `/Items?$select=ItemCode,ItemName,Manufacturer,ItemPrices,ItemWarehouseInfoCollection&$top=${top}&$skip=${skip}`;

    const response = await sapHttpService.get<{ value: any[] }>(session, url);
    return response.value.map(mapToSapItem);
  },

  async getItemByCode(session: SapSession, itemCode: string): Promise<SapItem> {
    const url = `/Items('${itemCode}')?$select=ItemCode,ItemName,Manufacturer,ItemPrices,ItemWarehouseInfoCollection`;

    const response = await sapHttpService.get<any>(session, url);
    return mapToSapItem(response);
  },
};
