import React from "react";
import ImageCard from "../ImageCard";
import Details from "./Details";
import Facilities from "./Facilities";
import Header from "./header";

const PropertiesDetails = () => {
  const {
    price,
    priceSymbol,
    title,
    bedrooms,
    bathrooms,
    squareFootage,
    squareSymbol,
    listingType,
    propertyType,
    address,
    description,
    view,
    halfBathrooms,
    lotAreaSymbol,
    lotArea,
    yearBuilt,
  } = SingleProperties;
  return (
    <div>
      <ImageCard />
      <Header />
      <Facilities
        propertyType={propertyType}
        price={price}
        priceSymbol={priceSymbol}
        listingType={listingType}
        squareFootage={squareFootage}
        squareSymbol={squareSymbol}
        bath={bathrooms}
        bed={bedrooms}
        view={view}
        halfBathrooms={halfBathrooms}
        lotArea={lotArea}
        lotAreaSymbol={lotAreaSymbol}
        yearBuilt={yearBuilt}
      />
      <Details />
    </div>
  );
};

export default PropertiesDetails;

const SingleProperties = {
  _id: "63a8a1e4a7c115b135bd8470",
  title: "97 bedroom",
  pageTitle: "77 bedroom",
  description: "<p><strong><em><u>ytytdutdut</u></em></strong></p>",
  category: "land",
  propertyType: "office",
  listingType: "sale",
  view: "garden",
  price: 7150,
  priceSymbol: "usd",
  bedrooms: 9,
  bathrooms: 1,
  halfBathrooms: 2,
  squareFootage: 568643,
  squareSymbol: "hectare",
  yearBuilt: 1997,
  lotArea: 783,
  lotAreaSymbol: "m2",
  propertyImages: [
    {
      url: "http://res.cloudinary.com/dwtx0sgd6/image/upload/v1671983131/propertyUploadImages/ravz7wxfocabke4vfquh.jpg",
    },
  ],
  isLiked: false,
  isPublished: false,
  address: {
    country: "poland",
    street: "Thomas estate ajah",
    city: "wrds",
    _id: "63a8a1e4a7c115b135bd8471",
  },
  websiteCopy: {
    webSiteName: "luxuryeste",
    webSiteURL: "djgdgchgcj",
    _id: "63a8a1e4a7c115b135bd8472",
  },
  country: "639e54994dffc7559c1c0607",
  createdAt: "2022-12-25T19:17:56.346Z",
  updatedAt: "2022-12-25T19:17:56.346Z",
  slug: "97-bedroom-77-bedroom-OmH6v0M_i",
  __v: 0,
  user: {
    _id: "63a89a8534f4f417256fb04a",
    email: "2@gmail.com",
    firstname: "mikeds",
    lastname: "ugbodagadasd",
    username: "incomenaijasjdj",
    role: "AGENT",
    profile: {
      isVerified: false,
      uploadCount: 0,
      _id: "63a89a8534f4f417256fb04b",
      createdAt: "2022-12-25T18:46:29.240Z",
      updatedAt: "2022-12-25T18:46:29.240Z",
    },
    createdAt: "2022-12-25T18:46:29.240Z",
    updatedAt: "2022-12-25T18:46:29.240Z",
    __v: 0,
  },
};
