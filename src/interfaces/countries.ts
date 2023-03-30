export interface Country {
  _id: string;
  name: string;
  description: string;
  bgImage: string;
  image: string;
  continent: Continent;
  properties: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Continent {
  _id: string;
  name: string;
  bgImage: string;
  image: string;
  description: string;
  countries: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CountriesPlaceholderData {
  success: string;
  statuscode: number;
  data: Country[];
}
