export interface IProperty {
  [x: string]: any;
  ID: string;
  attributes?: any;
  name?: string;
  image?: string;
  images?: any;
  tage?: string;
  title?: string;
  price?: number;
  location?: string;
  bed?: number;
  bath?: number;
  like?: boolean;
  agent?: string;
  agentImage?: string;
  squareFootage?: string;
  squareSymbol?: string;
  firstname?: string;
  lastname?: string;
}

export interface IProperyDetails {
  price: number;
  priceSymbol: string;
  bed: number;
  bath: number;
  squareFootage: number;
  squareSymbol: string;
  listingType: string;
  propertyType: string;
  view: string;
  halfBathrooms: number;
  lotAreaSymbol: string;
  lotArea: number;
  yearBuilt: number;
}
