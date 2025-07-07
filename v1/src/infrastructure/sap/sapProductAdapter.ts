import { axiosSapInstance } from './axiosSapInstance';
import { SapItem } from './types/item';
import { SapSession } from '../../domain/entities/sapSession';


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

    return response.data.value as SapItem[];
  },
};
