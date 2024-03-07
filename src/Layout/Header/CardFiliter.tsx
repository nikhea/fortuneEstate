import * as yup from "yup";
import Button from "../../components/UI/FormElement/Button";
import Input from "../../components/UI/FormElement/input/input";
import { useForm, FormProvider, useController } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import Select from "../../pages/dashBoard/pages/uploads/components/form/select/select";
import {
  BathOPtions,
  BedOPtions,
  ListingTypeOPtions,
  PriceOPtions,
  propertyTypeOPtions,
} from "../../pages/dashBoard/pages/uploads/optionsValue";
import { useSearchParams, useNavigate, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
const style = {
  container: ` mt-[24px] text-black  w-[60%] rounded-2xl text-start     `,
  cardContainer: ` w-full  rounded-[10px] bg-gray-100 shadow-2xl`,
  card: ` w-full py-4 `,
  form: `w-[85%] lg:w-[90%]  m-auto flex  flex-col `,
  btn: `  [&>*]:mr-5 [&>*]:px-[4em] mt-[20px] text-center`,
  errors: `block text-red-500 capitalize  leading-4 tracking-wide my-4 ml-4`,
  fillitersInput: `lg:flex flex-col md:flex-row justify-between lg:gap-6 items-center   sm:[&>*]:w-[95%] w-full lg:[&>*]:w-[60%]`,
  searchInput: `  -mt-8 mb-3 `,
};
const CardFiliter = ({ countries }: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const arr: any = [];
      let result = countries?.data;
      result.map((countries: any) => {
        return arr.push({ value: countries.name, label: countries.name });
      });
      setCountriesOptions(arr);
    };
    getData();
  }, []);
  const methods = useForm<FormFilterData>({
    // resolver: yupResolver(uploadSchema),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors },
  } = methods;
  const [countriesOptions, setCountriesOptions] = useState([""]);

  const { field: priceField } = useController({
    name: "price",
    control,
  });
  const { field: propertycountryField } = useController({
    name: "searchCountry",
    control,
  });
  const { field: propertyTypeField } = useController({
    name: "propertyType",
    control,
  });
  const { field: ListingTypeField } = useController({
    name: "listingType",
    control,
  });
  const { field: bedroomsField } = useController({
    name: "bedrooms",
    control,
  });
  const { field: bathroomsField } = useController({
    name: "bathrooms",
    control,
  });
  const handleCountryChange = (option: any) => {
    propertycountryField.onChange(option.value);

    return propertycountryField.onChange(option.value);
  };

  const handlepriceChange = (option: any) => {
    priceField.onChange(option.value);

    return priceField.onChange(option.value);
  };
  const handlepropertyTypeChange = (option: any) => {
    propertyTypeField.onChange(option.value);

    return propertyTypeField.onChange(option.value);
  };
  const handleListingTypeChange = (option: any) => {
    ListingTypeField.onChange(option.value);

    return ListingTypeField.onChange(option.value);
  };
  const handlebedroomsChange = (option: any) => {
    bedroomsField.onChange(option.value);

    return bedroomsField.onChange(option.value);
  };
  const handlebathroomsChange = (option: any) => {
    bathroomsField.onChange(option.value);

    return bathroomsField.onChange(option.value);
  };
  const handleRset = () => {
    setValue("propertyType", "");
    reset();
  };
  const redirectPage = (formData: FormFilterData) => {
    const { searchCountry, ...filteredFormDatas } = formData;
    const filteredFormData = Object.entries(filteredFormDatas)
      .filter(([key, value]) => value !== undefined && value !== "")
      .reduce((obj: any, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});

    const queryString = new URLSearchParams(filteredFormData).toString();

    searchCountry
      ? navigate(`/properties/${searchCountry}?${queryString}`)
      : navigate(`/properties?${queryString}`);
  };
  const submitFilterForm = (formData: FormFilterData) => {
    redirectPage(formData);
  };

  const title = watch("searchCountry");
  return (
    <div className={style.container}>
      <FormProvider {...methods}>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <form onSubmit={handleSubmit(submitFilterForm)}>
              <div className={style.form}>
                <div className={style.searchInput}>
                  <Select
                    inputFull
                    placeholder="Countries*"
                    // @ts-ignore
                    options={countriesOptions}
                    field={countriesOptions.find(
                      ({ value }: any) => value === propertycountryField.value
                    )}
                    handleSelectChange={handleCountryChange}
                  />
                </div>
                <div className={style.fillitersInput}>
                  <Select
                    placeholder="Lisiting"
                    options={ListingTypeOPtions}
                    field={ListingTypeOPtions.find(
                      ({ value }) => value === ListingTypeField.value
                    )}
                    handleSelectChange={handleListingTypeChange}
                    inputHalf
                  />

                  <Select
                    placeholder="Bedrooms"
                    options={BedOPtions}
                    field={BedOPtions.find(
                      ({ value }) => value === bedroomsField.value
                    )}
                    handleSelectChange={handlebedroomsChange}
                    inputHalf
                  />
                  <Select
                    placeholder="Bathrooms"
                    options={BathOPtions}
                    field={BathOPtions.find(
                      ({ value }) => value === bathroomsField.value
                    )}
                    handleSelectChange={handlebathroomsChange}
                    inputHalf
                  />
                  <Select
                    placeholder="Price"
                    options={PriceOPtions}
                    field={PriceOPtions.find(
                      ({ value }) => value === priceField.value
                    )}
                    handleSelectChange={handlepriceChange}
                    inputHalf
                  />
                  {/* <div className="-mt-[1.1%] w-full  -mb-">
                    <Select
                      placeholder="Property*"
                      options={propertyTypeOPtions}
                      field={propertyTypeOPtions.find(
                        ({ value }) => value === propertyTypeField.value
                      )}
                      handleSelectChange={handlepropertyTypeChange}
                      inputFull
                    />
                  </div> */}
                </div>
              </div>
              <div className={style.btn}>
                <Button types="submit" primary rounded linearGradient uppercase>
                  Search
                </Button>
                <Button
                  types="button"
                  onClick={handleRset}
                  primary
                  rounded
                  linearGradient
                  uppercase
                >
                  reset
                </Button>
              </div>
            </form>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default CardFiliter;
interface FormFilterData {
  searchCountry: string;
  country: string;
  propertyType: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  listingType: string;
  view: string;
  category: string;
}
export const uploadSchema = yup.object().shape({
  searchCountry: yup.string(),
  searchPropertyType: yup.string(),
  searchPrice: yup.number(),
  searchBedrooms: yup.number(),
  searchBathrooms: yup.number(),
});
// navigate(`/properties/${formData.searchProperties}`);
// setSearchParams(formData);
// navigate(`/properties?${new URLSearchParams(formData).toString()}`);

// Filter out undefined and empty values from the form data
// Navigate to the '/properties' route with the query string
{
  /* <Input
                    type="text"
                    placeholder="what are you looking for"
                    name="searchCountry"
                    rounded
                    inputFull
                    errors={errors}
                    inputRef={register("searchCountry")}
                    isBlackBg
                  /> */
}
{
  /* <Input
                    type="number"
                    placeholder="Enter Price"
                    name="searchPrice"
                    rounded
                    isWhiteBg
                    errors={errors}
                    inputRef={register("searchPrice")}
                  /> */
}
{
  /* <Input
                    type="number"
                    placeholder="No of Bedrooms"
                    name="searchBedrooms"
                    rounded
                    isWhiteBg
                    errors={errors}
                    inputRef={register("searchBedrooms")}
                  />

                  <Input
                    type="number"
                    placeholder="No of Bathrooms"
                    name="searchBed"
                    rounded
                    isWhiteBg
                    errors={errors}
                    inputRef={register("searchBathrooms")}
                  /> */
}
