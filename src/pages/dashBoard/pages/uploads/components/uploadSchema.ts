import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validateImageType = (value: any) => {
  if (value) {
    let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
    return SUPPORTED_FORMATS.includes(type);
  }
};
export const uploadSchema = yup.object().shape({
  title: yup.string().required(),
  pageTitle: yup.string().required(),
  description: yup.string(),
  category: yup.string().required(),
  propertyType: yup.string().required(),
  listingType: yup.string().required(),
  view: yup.string().required(),
  squareSymbol: yup.string().required(),
  lotAreaSymbol: yup.string(),
  priceSymbol: yup.string().required(),
  country: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  webSiteURL: yup.string().required(),
  webSiteName: yup.string().required(),
  price: yup.number().required(),
  bedrooms: yup.number().required(),
  bathrooms: yup.number().required(),
  halfBathrooms: yup.number(),
  squareFootage: yup.number().required(),
  yearBuilt: yup.number(),
  lotArea: yup.number(),
  propertyImages: yup.mixed(),
});
