export interface ISale {
  _id?: string;
  title: string;
  image: string;
  price: string;
  location: string;
}
export interface ISaleProps {
  SaleData: ISale[];
}

export const SaleData: ISale[] = [
  {
    _id: "1",
    image:
      "https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-ec130000000007a00001630cc783-127931372.jpg",
    title: "Metro Jayakar Apartment",
    location: "North Carolina, USA",
    price: "35",
  },
  {
    _id: "2",
    image:
      "https://pic.le-cdn.com/thumbs/1024x768/08/1/properties/Property-f59fa1f0ee2473d34166ca20f9e846a5-127841628.jpg",
    title: "Letdo Ji Hotel & Aportment",
    location: " Carolina North, UK",
    price: "40",
  },
  {
    _id: "3",
    image:
      "https://pic.le-cdn.com/thumbs/1024x768/08/1/properties/Property-1cfdb552e020c7ab15f43426371f8c1f-127839278.jpg",
    title: "Star Sun Hotel & Apartment",
    location: "North Carolina, USA",
    price: "50",
  },
  {
    _id: "1",
    image:
      "https://pic.le-cdn.com/thumbs/1024x768/04/1/properties/Property-ba390000000007a20001633f1ce1-128072122.jpg",
    title: "Metro Jayakar Apartment",
    location: "North Carolina, USA",
    price: "55",
  },
];
