import { FC } from "react";
import * as yup from "yup";
import Button from "../../components/UI/FormElement/Button";
import Input from "../../components/UI/FormElement/input/input";
import { useForm, FormProvider, useController } from "react-hook-form";
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
} from "../../pages/dashBoard/pages/uploads/optionsValue";
const style = {
  container: `flex  w-full m-auto `,
  cardContainer: ` w-[90%] m-auto rounded-[10px] bg-white shadow-2xl mb-3`,
  card: ` w-full py-8 `,
  form: `w-[90%] m-auto flex items-cente flex-col `,
  btn: `w-[90%] m-auto [&>*]:mr-5`,
  errors: `block text-red-500 capitalize  leading-4 tracking-wide my-4 ml-4`,
  fillitersInput: `flex flex-col md:flex-row justify-between my-3 gap-1 bg-red-500 w-full`,
  searchInput: `-mb-2 lg:mb-0 relative`,
  searchIcon: `absolute bottom-6 right-5`,
};
interface FormFilterData {
  searchProperties: string;
  searchPropertyType: string;
  searchPrice: number;
  searchBedrooms: number;
  searchBathrooms: number;
}
export const uploadSchema = yup.object().shape({
  searchProperties: yup.string(),
  searchPropertyType: yup.string(),
  searchPrice: yup.number(),
  searchBedrooms: yup.number(),
  searchBathrooms: yup.number(),
});
const filterCard: FC = () => {
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
  console.log(watch());

  const { field: propertyTypeField } = useController({
    name: "searchPropertyType",
    control,
  });

  const handlepropertyTypeChange = (option: any) => {
    propertyTypeField.onChange(option.value);

    return propertyTypeField.onChange(option.value);
  };
  const submitFilterForm = (formData: any) => {
    console.log(formData, "filter Data");
    // console.log(FormData);
  };
  useFormPersist("filiterSearchKey", {
    watch,
    setValue,
    storage: window.localStorage,
  });
  const title = watch("searchProperties");
  return (
    <FormProvider {...methods}>
      <div className={style.container}>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <form onSubmit={handleSubmit(submitFilterForm)}>
              <div className={style.form}>
                <div className={style.searchInput}>
                  <Input
                    type="text"
                    placeholder="what are you looking for?"
                    name="searchProperties"
                    rounded
                    inputFull
                    errors={errors}
                    inputRef={register("searchProperties")}
                    isBlackBg
                  />
                  <span className={style.searchIcon} id="basic-addon1">
                    <CiSearch
                      size={30}
                      style={{ marginRight: "10px" }}
                      color="white"
                    />
                  </span>
                </div>
                <div className={style.fillitersInput}>
                  <Input
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
                  />
                  <Select
                    placeholder="property Type*"
                    options={propertyTypeOPtions}
                    field={propertyTypeOPtions.find(
                      ({ value }) => value === propertyTypeField.value
                    )}
                    handleSelectChange={handlepropertyTypeChange}
                    inputFull
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
      </div>
    </FormProvider>
  );
};

export default filterCard;
