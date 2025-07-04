export interface SapItem {
  ItemCode: string;
  ItemName: string;
  Manufacturer: number | null;
  ItemPrices: Array<{
    PriceList: number;
    Price: number;
    Currency: string | null;
  }>;
  ItemWarehouseInfoCollection: Array<{
    WarehouseCode: string;
    InStock: number;
  }>;
  Manufacturer2?: {
    Code: number;
    ManufacturerName: string;
  };
}
