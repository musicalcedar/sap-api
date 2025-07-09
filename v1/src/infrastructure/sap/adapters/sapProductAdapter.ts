import { axiosSapInstance } from '../axiosSapInstance';
import { SapItem } from '../../../domain/entities/sapItem';
import { SapSession } from '../../../domain/entities/sapSession';

// Tipo interno para representar la estructura de datos que viene directamente de SAP
interface SapItemRaw {
  ItemCode: string;
  ItemName: string;
  Manufacturer: number | null;
  Manufacturer2?: {
    Code: number;
    ManufacturerName: string;
  };
  ItemPrices: Array<{
    PriceList: number;
    Price: number;
    Currency: string | null;
  }>;
  ItemWarehouseInfoCollection: Array<{
    WarehouseCode: string;
    InStock: number;
    Committed?: number;
    Ordered?: number;
    Available?: number;
  }>;
}

// Función para mapear los datos crudos de SAP a nuestra entidad de dominio
const mapToSapItem = (raw: SapItemRaw): SapItem => {
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
      raw.ItemPrices?.map(price => ({
        listId: price.PriceList,
        amount: price.Price,
        currency: price.Currency || null,
      })) || [],
    stock:
      raw.ItemWarehouseInfoCollection?.map(warehouse => ({
        warehouseCode: warehouse.WarehouseCode,
        quantity: warehouse.InStock,
        committed: warehouse.Committed,
        ordered: warehouse.Ordered,
        available: warehouse.Available,
      })) || [],
  };
};

export const sapProductAdapter = {
  async getItems(session: SapSession, top: number = 20, skip: number = 0) {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    let odataQuery =
      '$select=ItemCode,ItemName,Manufacturer,ItemPrices,ItemWarehouseInfoCollection,Manufacturer2' +
      '&$expand=Manufacturer2' +
      `&$top=${top}` +
      `&$skip=${skip}`;

    const url = `/Items?${odataQuery}`;

    const response = await axiosSapInstance.get(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
    });

    // Mapear los datos crudos a nuestra entidad de dominio
    return response.data.value.map(mapToSapItem);
  },

  async getItemByCode(session: SapSession, itemCode: string): Promise<SapItem> {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    const url = `/Items('${itemCode}')?$select=ItemCode,ItemName,Manufacturer,ItemPrices,ItemWarehouseInfoCollection,Manufacturer2&$expand=Manufacturer2`;

    const response = await axiosSapInstance.get(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
    });

    // Mapear los datos crudos a nuestra entidad de dominio
    return mapToSapItem(response.data);
  },
};
