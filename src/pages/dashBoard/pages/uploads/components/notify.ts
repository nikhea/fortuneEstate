import { ToastContainer, toast } from "react-toastify";

export const notify = (WatchErrors: any) => {
  const {
    title,
    images,
    pageTitle,
    description,
    category,
    propertyType,
    listingType,
    view,
    squareSymbol,
    priceSymbol,
    country,
    street,
    city,
    webSiteURL,
    webSiteName,
    price,
    bedrooms,
    bathrooms,
    halfBathrooms,
    squareFootage,
    lotAreaSymbol,
    yearBuilt,
    propertyImages,
  } = WatchErrors;

  //  const isEmptyImage =Object.keys(images[0]).length === 0 && images.constructor === Object;

  //   console.log(isEmptyImage);

  if (!title) {
    toast.error("Title  is a required field");
  }
  if (!pageTitle) {
    toast.error("pageTitle  is a required field");
  }
  if (!propertyImages || propertyImages.length === 0) {
    toast.error("Images are Required");
  }

  if (!description || description.includes("<p><br></p>")) {
    // toast.error("Description  is a required field");
  }
  if (!category) {
    toast.error("category is a required field");
  }
  if (!propertyType) {
    toast.error("propertyType is a required field");
  }
  if (!listingType) {
    toast.error("listingType is a required field");
  }
  if (!view) {
    toast.error("view is a required field");
  }
  if (!price) {
    toast.error("price is a required field");
  }
  if (!priceSymbol) {
    toast.error("currency is a required field");
  }
  if (!bedrooms) {
    toast.error("bedrooms is a required field");
  }
  if (!bathrooms) {
    toast.error("bathrooms is a required field");
  }
  if (!squareFootage) {
    toast.error("square footage is a required field");
  }
  if (!squareSymbol) {
    toast.error("square footage unit is a required field");
  }
  if (!country) {
    toast.error("country is a required field");
  }
  if (!street) {
    toast.error("street is a required field");
  }
  if (!city) {
    toast.error("city is a required field");
  }
  if (!webSiteURL) {
    toast.error("webSiteURL is a required field");
  }
  if (!webSiteName) {
    toast.error("webSiteName is a required field");
  }
};
// if (images[0] == {}) {
//   toast.error("Images Must Be Required");
// }
