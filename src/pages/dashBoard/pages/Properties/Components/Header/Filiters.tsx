import { FC } from "react";
import * as yup from "yup";
import Button from "../../../../../../components/UI/FormElement/Button";
import Input from "../../../../../../components/UI/FormElement/input/input";
import { useForm, FormProvider, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import Select from "../../../../../../pages/dashBoard/pages/uploads/components/form/select/select";
import { CiSearch } from "react-icons/ci";
import {
  categoryOPtions,
  propertyTypeOPtions,
  ListingTypeOPtions,
  currencySymbolOPtions,
  ViewOPtions,
  measurementOPtions,
} from "../../../../../../pages/dashBoard/pages/uploads/optionsValue";
const style = {
  container: `flex  w-full m-auto `,
  card: ` w-full py-8 `,
  form: `w-[99%] m-auto  gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 `,
  btn: `w-[99%] m-auto [&>*]:mr-5 my-5`,
  searchInput: ``,
};
interface FormFilterData {
  searchProperties: string;
  searchPropertyType: string;
  searchPrice: string;
  searchBedrooms: string;
  searchBathrooms: string;
  searchLisitingType: string;
}
export const uploadSchema = yup.object().shape({
  searchProperties: yup.string(),
  searchPropertyType: yup.string(),
  searchLisitingType: yup.string(),
  searchPrice: yup.string(),
  searchBedrooms: yup.string(),
  searchBathrooms: yup.string(),
});
const Filiters: FC = () => {
  const methods = useForm<FormFilterData>({
    resolver: yupResolver(uploadSchema),
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

  const { field: propertyTypeField } = useController({
    name: "searchPropertyType",
    control,
  });
  const { field: ListingTypeField } = useController({
    name: "searchLisitingType",
    control,
  });

  const handlepropertyTypeChange = (option: any) => {
    propertyTypeField.onChange(option.value);

    return propertyTypeField.onChange(option.value);
  };
  const handleListingTypeChange = (option: any) => {
    ListingTypeField.onChange(option.value);

    return ListingTypeField.onChange(option.value);
  };
  const submitFilterForm = (formData: any) => {
    console.log(formData, "filter Data");
    console.log(errors);
  };
  useFormPersist("filiterSearchKey", {
    watch,
    setValue,
    storage: window.localStorage,
  });
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
                inputRef={register("searchProperties")}
                isBlackBg
              />
              <Input
                type="number"
                placeholder="Enter Price?"
                name="searchPrice"
                rounded
                isWhiteBg
                inputFull
                errors={errors}
                inputRef={register("searchPrice")}
              />
              <Input
                type="number"
                placeholder="Bedrooms?"
                name="searchBedrooms"
                rounded
                inputFull
                isWhiteBg
                errors={errors}
                inputRef={register("searchBedrooms")}
              />
              <Input
                type="number"
                placeholder="Bathrooms?"
                name="searchBed"
                rounded
                inputFull
                isWhiteBg
                errors={errors}
                inputRef={register("searchBathrooms")}
              />
              <div className=" w-[80] mt-[-.7]">
                <Select
                  placeholder="Lisiting*"
                  options={ListingTypeOPtions}
                  field={ListingTypeOPtions.find(
                    ({ value }) => value === propertyTypeField.value
                  )}
                  handleSelectChange={handleListingTypeChange}
                  inputHalf
                />
              </div>
              <div className=" w-[80] mt-[-.7]">
                <Select
                  placeholder="Property*"
                  options={propertyTypeOPtions}
                  field={propertyTypeOPtions.find(
                    ({ value }) => value === ListingTypeField.value
                  )}
                  handleSelectChange={handlepropertyTypeChange}
                  inputHalf
                />
              </div>
            </div>
            <div className={style.btn}>
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
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default Filiters;
