import { FC, useEffect, useState } from "react";
import * as yup from "yup";
import Button from "../../components/UI/FormElement/Button";
import Input from "../../components/UI/FormElement/input/input";
import {
  useForm,
  FormProvider,
  useController,
  Controller,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import Select from "../../pages/dashBoard/pages/uploads/components/form/select/select";
import { CiSearch } from "react-icons/ci";
import {
  categoryOPtions,
  propertyTypeOPtions,
  ListingTypeOPtions,
  currencySymbolOPtions,
  ViewOPtions,
  measurementOPtions,
  BedOPtions,
  BathOPtions,
  PriceOPtions,
} from "../../pages/dashBoard/pages/uploads/optionsValue";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import useQueryStringStore from "../../store/useQueryStore";
import useSearchStore from "../../store/useSearchStore";
const style = {
  container: `w-[80%] m-auto  mt-16 bg-gray-100 px-5 rounded-2xl py-5 `,
  form: ``,
  btn: `flex justify-end   `,
  errors: ``,
  fillitersInput: ``,
  searchInput: `w-[490px] `,
  searchIcon: ``,
};
interface FilterCardProps {
  PageParams?: (formData: any, checkShow: any) => void;
}
const FilterCard: FC<FilterCardProps> = ({ PageParams }: any) => {
  const { setFormData } = useSearchStore();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const methods = useForm<FormFilterData>({});
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const showParam = queryParams.get("show");
    setValue("searchProperties", queryParams.get("searchProperties") || "");
    setValue("price", queryParams.get("price") || "");
    setValue("listingType", queryParams.get("listingType") || "");
    setValue("bedrooms", queryParams.get("bedrooms") || "");
    setValue("bathrooms", queryParams.get("bathrooms") || "");
    setValue("propertyType", queryParams.get("propertyType") || "");
    setValue("view", queryParams.get("view") || "");
    setValue("category", queryParams.get("category") || "");
    setShow(showParam === "true");
  }, []);
  const { field: priceField } = useController({
    name: "price",
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
  const { field: propertyViewField } = useController({
    name: "view",
    control,
  });
  const { field: ListingCategoryField } = useController({
    name: "category",
    control,
  });
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
  const handleViewTypeChange = (option: any) => {
    propertyViewField.onChange(option.value);

    return propertyViewField.onChange(option.value);
  };
  const handleCategoryTypeChange = (option: any) => {
    ListingCategoryField.onChange(option.value);

    return ListingCategoryField.onChange(option.value);
  };

  const handleShow = () => {
    setShow(!show);
  };
  // formData?: FormFilterData, checkShow?: any
  // const PageParams = (formData?: FormFilterData, checkShow?: any) => {
  //   const { ...filteredFormDatas } = formData;
  //   const filteredFormData = Object.entries(filteredFormDatas)
  //     .filter(([key, value]) => value !== undefined && value !== "")
  //     .reduce((obj: any, [key, value]) => {
  //       obj[key] = value;
  //       return obj;
  //     }, {});
  //   if (checkShow) {
  //     filteredFormData["show"] = "true";
  //   }

  //   const newQueryString = new URLSearchParams(filteredFormData).toString();
  //   // setQueryString(newQueryString);

  //   navigate({
  //     pathname: window.location.pathname,
  //     search: newQueryString,
  //   });
  // };

  const submitFilterForm = (formData: any) => {
    const checkShow =
      (getValues("view") !== undefined && getValues("view") !== "") ||
      (getValues("category") !== undefined && getValues("category") !== "");
    PageParams(formData, checkShow);
    setFormData(...formData);
  };

  return (
    <div className={style.container}>
      <h1 className=" capitalize text-2xl  font-semibold my-4">
        find property
      </h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitFilterForm)}>
          <div className={style.form}>
            <div className="flex items-center m-auto gap-3  w-full justify-between flex-1">
              <div className={style.searchInput}>
                <Input
                  type="text"
                  placeholder="Search By Address"
                  name="searchProperties"
                  rounded
                  inputFull
                  errors={errors}
                  inputRef={register("searchProperties")}
                  isBlackBg
                />
              </div>
              <div className=" grid grid-cols-6  gap-2">
                <Controller
                  control={control}
                  name="listingType"
                  render={({ field }) => (
                    <Select
                      name={field.name}
                      inputRef={field.ref}
                      placeholder="Lisiting"
                      options={ListingTypeOPtions}
                      field={ListingTypeOPtions.find(
                        (c) => c.value === field.value
                      )}
                      handleSelectChange={handleListingTypeChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="bedrooms"
                  render={({ field }) => (
                    <Select
                      name={field.name}
                      inputRef={field.ref}
                      placeholder="Bedrooms"
                      options={BedOPtions}
                      field={BedOPtions.find((c) => c.value === field.value)}
                      handleSelectChange={handlebedroomsChange}
                      inputHalf
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="bathrooms"
                  render={({ field }) => (
                    <Select
                      name={field.name}
                      placeholder="Bathrooms"
                      inputRef={field.ref}
                      options={BathOPtions}
                      field={BathOPtions.find((c) => c.value === field.value)}
                      handleSelectChange={handlebathroomsChange}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="price"
                  render={({ field }) => (
                    <Select
                      name={field.name}
                      placeholder="price"
                      inputRef={field.ref}
                      options={PriceOPtions}
                      field={PriceOPtions.find((c) => c.value === field.value)}
                      handleSelectChange={(val: any) =>
                        field.onChange(val.value)
                      }
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="propertyType"
                  render={({ field }) => (
                    <Select
                      name={field.name}
                      inputRef={field.ref}
                      placeholder="property"
                      options={propertyTypeOPtions}
                      field={propertyTypeOPtions.find(
                        (c) => c.value === field.value
                      )}
                      handleSelectChange={handlepropertyTypeChange}
                    />
                  )}
                />
                <div
                  onClick={handleShow}
                  className=" cursor-pointer   border border-gray-300 capitalize px-5 mt-2 rounded-full   h-[50px] flex items-center text-center "
                >
                  <h1 className=" mx-1">more filiters</h1>
                  <FaFilter className={`${show ? "text-blue-500" : ""}`} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center   w-full  gap-1 flex-1 mt-5">
            <div
              className={`flex items-center w-full gap-1 ${
                show ? "transition duration-700 ease-in-out" : "hidden"
              }`}
            >
              <Controller
                control={control}
                name="view"
                render={({ field }) => (
                  <Select
                    name={field.name}
                    inputRef={field.ref}
                    placeholder="view"
                    options={ViewOPtions}
                    field={ViewOPtions.find((c) => c.value === field.value)}
                    handleSelectChange={handleViewTypeChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <Select
                    name={field.name}
                    inputRef={field.ref}
                    placeholder="category"
                    options={categoryOPtions}
                    field={categoryOPtions.find((c) => c.value === field.value)}
                    handleSelectChange={handleCategoryTypeChange}
                  />
                )}
              />
            </div>
            <div className="flex gap-3 justify-end w-full">
              <Button types="submit" primary rounded linearGradient uppercase>
                Search
              </Button>

              <Button
                onClick={() => reset()}
                primary
                rounded
                linearGradient
                uppercase
              >
                reset
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FilterCard;
export interface FormFilterData {
  searchProperties: string;
  country: string;
  propertyType: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  listingType: string;
  view: string;
  category: string;
  show?: any;
}
export const uploadSchema = yup.object().shape({
  searchProperties: yup.string(),
  searchPropertyType: yup.string(),
  searchPrice: yup.number(),
  searchBedrooms: yup.number(),
  searchBathrooms: yup.number(),
  searchView: yup.number(),
  searchCategory: yup.number(),
});
// const style = {
//   container: `flex  w-full m-auto `,
//   cardContainer: ` w-[90%] m-auto rounded-[10px] bg-white shadow-2xl mb-3`,
//   card: ` w-full py-8 `,
//   form: `w-[90%]  m-auto flex items-cente flex-col `,
//   btn: `w-[90%] m-auto [&>*]:mr-5`,
//   errors: `block text-red-500 capitalize  leading-4 tracking-wide my-4 ml-4`,
//   fillitersInput: `flex flex-col md:flex-row justify-between my-3 lg:gap-6 items-center w-full lg:[&>*]:w-[60%]`,
//   searchInput: `-mb-2 lg:mb-0 relative `,
//   searchIcon: `absolute bottom-6 right-5`,
// };
{
  /* <span className={style.searchIcon} id="basic-addon1">
                    <CiSearch
                      size={30}
                      style={{ marginRight: "10px" }}
                      color="white"
                    />
                  </span> */
}

{
  /* flex items-center justify-between   gap-2 */
}
{
  /* grid grid-cols-6 gap-5 */
}
{
  /* <Input
type="number"
placeholder="Enter Price?"
name="searchPrice"
rounded
isWhiteBg
errors={errors}
inputRef={register("searchPrice")}
/>
<Input
type="number"
placeholder="Bedrooms?"
name="searchBedrooms"
rounded
isWhiteBg
errors={errors}
inputRef={register("searchBedrooms")}
/>
<Input
type="number"
placeholder="Bathrooms?"
name="searchBed"
rounded
isWhiteBg
errors={errors}
inputRef={register("searchBathrooms")}
/> */
}
{
  /* <Select
placeholder="Bedrooms"
options={BedOPtions}
field={BedOPtions.find(
  ({ value }) => value === bedroomsField.value
)}
handleSelectChange={handlebedroomsChange}
inputHalf
/> */
}
{
  /* <Select
placeholder="Bathrooms"
options={BathOPtions}
field={BathOPtions.find(
  ({ value }) => value === bathroomsField.value
)}
handleSelectChange={handlebathroomsChange}
inputHalf
/> */
}
{
  /* <Controller
control={control}
// defaultValue={p}
name="listingType"
// rules={{ required: true }}
render={({ field }) => (
  <Select
    name={field.name}
    inputRef={field.ref}
    // defaultValue={p}
    placeholder="Lisiting"
    options={ListingTypeOPtions}
    field={ListingTypeOPtions.find(
      (c) => c.value === field.value
    )}
    handleSelectChange={handleListingTypeChange}
  />
)}
/> */
}
// lg:[&>*]:w-[60%]
// interface FormFilterData {
//   searchProperties: string;
//   searchPropertyType: string;
//   searchPrice: number;
//   searchBedrooms: number;
//   searchBathrooms: number;
// }
// export const uploadSchema = yup.object().shape({
//   searchProperties: yup.string(),
//   searchPropertyType: yup.string(),
//   searchPrice: yup.number(),
//   searchBedrooms: yup.number(),
//   searchBathrooms: yup.number(),
// });
// useFormPersist("filiterSearchKey", {
//   watch,
//   setValue,
//   storage: window.localStorage,
// });
// const submitFilterForm = (formData: any) => {
//   console.log(formData, "filter Data");
//   // console.log(FormData);
// };
{
  /* <Select
placeholder="Type*"
options={propertyTypeOPtions}
field={propertyTypeOPtions.find(
  ({ value }) => value === propertyTypeField.value
)}
handleSelectChange={handlepropertyTypeChange}
inputFull
/> */
}
// useEffect(() => {
//   const encodedQueryString = encodeURIComponent(queryString);
//   navigate({
//     pathname: window.location.pathname,
//     search: encodedQueryString,
//   });
// }, []);
