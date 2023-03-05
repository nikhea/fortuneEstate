import { FC, useState } from "react";
import * as yup from "yup";
import Button from "../../../../../../components/UI/FormElement/Button";
import Input from "../../../../../../components/UI/FormElement/input/input";
import { motion } from "framer-motion";
import { useForm, FormProvider, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Switch from "react-switch";
import useFormPersist from "react-hook-form-persist";
import Select from "../../../../../../pages/dashBoard/pages/uploads/components/form/select/select";

import {
  PriceOPtions,
  BedOPtions,
  BathOPtions,
  categoryOPtions,
  propertyTypeOPtions,
  ListingTypeOPtions,
  ViewOPtions,
} from "../../../../../../pages/dashBoard/pages/uploads/optionsValue";
import FilterIcon from "./FilterIcon";
import useFilitersStore from "../../../../../../store/Filiters";
const style = {
  container: `flex m-auto w-[95%] `,
  card: ` w-full pt-8`,
  form: `w-[99%] m-auto  gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 `,
  btn: `w-[99%] m-auto  my-5 flex justify-between items-center`,
  searchInput: ``,
  more: `border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-0 w-full h-full duration-500 ease-linear transition delay-150 flex items-center justify-center`,
};
interface FormFilterData {
  search: string;
  propertyType: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  listingType: string;
  view: string;
  category: string;
}
interface OptionType {
  label: string;
  value: string;
}
export const uploadSchema = yup.object().shape({
  searchProperties: yup.string(),
  searchPropertyType: yup.string(),
  searchLisitingType: yup.string(),
  searchPrice: yup.string(),
  searchBedrooms: yup.string(),
  searchBathrooms: yup.string(),
});
interface IFiliters {
  setFilterProperties: any;
}
const Filiters: FC = () => {
  const { filterProperties, setFiliters } = useFilitersStore();
  const [checked, setChecked] = useState(false);
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

  const { field: priceField } = useController({
    name: "price",
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
  const { field: propertyTypeField } = useController({
    name: "propertyType",
    control,
  });
  const { field: ListingTypeField } = useController({
    name: "listingType",
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
  const handlebedroomsChange = (option: any) => {
    bedroomsField.onChange(option.value);

    return bedroomsField.onChange(option.value);
  };
  const handlebathroomsChange = (option: any) => {
    bathroomsField.onChange(option.value);

    return bathroomsField.onChange(option.value);
  };
  const handlepropertyTypeChange = (option: any) => {
    propertyTypeField.onChange(option.value);

    return propertyTypeField.onChange(option.value);
  };
  const handleListingTypeChange = (option: any) => {
    ListingTypeField.onChange(option.value);

    return ListingTypeField.onChange(option.value);
  };
  const handleViewTypeChange = (option: any) => {
    propertyViewField.onChange(option.value);

    return propertyViewField.onChange(option.value);
  };
  const handleCategoryTypeChange = (option: any) => {
    ListingCategoryField.onChange(option.value);

    return ListingCategoryField.onChange(option.value);
  };
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  const submitFilterForm = (formData: any) => {
    setFiliters({ ...filterProperties, ...formData });
  };
  const ResetForm = (e: any) => {
    reset();
  };
  // useFormPersist("filiterSearchKey", {
  //   watch,
  //   setValue,
  //   storage: window.localStorage,
  // });
  return (
    <FormProvider {...methods}>
      <div className={style.container}>
        <div className={style.card}>
          <form onSubmit={handleSubmit(submitFilterForm)}>
            <div className={style.form}>
              <Input
                type="text"
                placeholder="what are you looking for?"
                name="searchProperties"
                rounded
                errors={errors}
                inputFull
                inputRef={register("search")}
                isBlackBg
              />
              <div className=" w-[80] mt-[.3em]">
                <Select
                  placeholder="Price"
                  options={PriceOPtions}
                  field={PriceOPtions.find(
                    ({ value }) => value === priceField.value
                  )}
                  handleSelectChange={handlepriceChange}
                  inputHalf
                />
              </div>
              <div className=" w-[80] mt-[.3em]">
                <Select
                  placeholder="Bedrooms"
                  options={BedOPtions}
                  field={BedOPtions.find(
                    ({ value }) => value === bedroomsField.value
                  )}
                  handleSelectChange={handlebedroomsChange}
                  inputHalf
                />
              </div>
              <div className=" w-[80] mt-[.3em]">
                <Select
                  placeholder="Bathrooms"
                  options={BathOPtions}
                  field={BathOPtions.find(
                    ({ value }) => value === bathroomsField.value
                  )}
                  handleSelectChange={handlebathroomsChange}
                  inputHalf
                />
              </div>
              <div className=" w-[80] mt-[-.7]">
                <Select
                  placeholder="Lisiting"
                  options={ListingTypeOPtions}
                  field={ListingTypeOPtions.find(
                    ({ value }) => value === ListingTypeField.value
                  )}
                  handleSelectChange={handleListingTypeChange}
                  inputHalf
                />
              </div>
              <div className="w-full lg:h-[70%] mt-[.3em] text-white">
                <button
                  onClick={() => setChecked(!checked)}
                  className={style.more}
                >
                  <FilterIcon /> {checked ? "STANDARD" : "ADVANCED"}
                </button>
              </div>
            </div>
            <div
              className={`${style.form} ${
                checked
                  ? "flex duration-500 ease-linear transition delay-150 mt-5 lg:mt-0 "
                  : "hidden duration-500 ease-linear transition delay-150"
              }  `}
            >
              <div className=" w-[80] mt-[-.7]">
                <Select
                  placeholder="view"
                  options={ViewOPtions}
                  field={ViewOPtions.find(
                    ({ value }) => value === propertyViewField.value
                  )}
                  handleSelectChange={handleViewTypeChange}
                  inputHalf
                />
              </div>
              <div className=" w-[80] mt-[-.7]">
                <Select
                  placeholder="category"
                  options={categoryOPtions}
                  field={categoryOPtions.find(
                    ({ value }) => value === ListingCategoryField.value
                  )}
                  handleSelectChange={handleCategoryTypeChange}
                  inputHalf
                />
              </div>
              <div className=" w-[80] mt-[-.7]">
                <Select
                  placeholder="Property"
                  options={propertyTypeOPtions}
                  field={propertyTypeOPtions.find(
                    ({ value }) => value === propertyTypeField.value
                  )}
                  handleSelectChange={handlepropertyTypeChange}
                  inputHalf
                />
              </div>
            </div>
            <div className={style.btn}>
              <span className="[&>*]:mr-5">
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
              </span>
              <div>
                {/* <Switch
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch "
                /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default Filiters;
{
  /* <Select
selectRef={selectRef}
placeholder="Lisiting"
options={ListingTypeOPtions}
field={ListingTypeOPtions.find(
  ({ value }) => value === propertyTypeField.value
)}
handleSelectChange={handleListingTypeChange}
inputHalf
/> */
}
{
  /* <Input
type="number"
placeholder="Bedrooms?"
name="bedrooms"
rounded
inputFull
isWhiteBg
errors={errors}
inputRef={register("bedrooms")}
/> */
}
