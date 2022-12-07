export interface FormData {
  title: string;
  pageTitle: string;
  description: string;
  category: string;
  propertyType: string;
  listingType: string;
  view: string;
  squareSymbol: string;
  priceSymbol: string;

  country: string;
  street: string;
  city: string;

  webSiteURL: string;
  webSiteName: string;
  price: number;

  bedrooms: number;
  bathrooms: number;
  halfBathrooms?: number;
  squareFootage: number;
  lotAreaSymbol?: string;
  yearBuilt?: number;
  lotArea?: number;
  images: any;
}
