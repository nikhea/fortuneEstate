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
  description: yup.string().required(),
  // category: yup.string().required(),
  // propertyType: yup.string().required(),
  // listingType: yup.string().required(),
  // view: yup.string().required(),
  // squareSymbol: yup.string().required(),
  // priceSymbol: yup.string().required(),
  // country: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),

  webSiteURL: yup.string().required(),
  webSiteName: yup.string().required(),

  // price: yup.number().required(),
  // bedrooms: yup.number().required(),
  // bathrooms: yup.number().required(),
  // halfBathrooms: yup.number().required(),
  // squareFootage: yup.number().required(),

  // lotAreaSymbol: yup.string(),
  // yearBuilt: yup.string(),
  // lotArea: yup.number(),

  images: yup
    .mixed()
    .required("A file is required")
    .test(
      "FileSize",
      "The File is too large",
      // (value) => !value || (value && value.size <= 1024 * 1024)
      (value) => {
        return value && value[0].size <= 1024 * 1024;
      }
    )

    .test(
      "format",
      "we dont accept format",
      (value) => (value && SUPPORTED_FORMATS.includes(value[0].type))
    ),
  // images: yup.string().required(),
});

// images: yup
//   .mixed()
//   .nullable()
//   .required("A file is required")
//   .test(
//     "Fichier taille",
//     "upload file",
//     (value) => !value || (value && value.size <= 1024 * 1024)
//   )
//   .test(
//     "format",
//     "upload file",
//     (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
//   ),
