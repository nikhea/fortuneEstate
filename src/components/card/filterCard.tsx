import { FC } from "react";
import * as yup from "yup";
import Button from "../../components/UI/FormElement/Button";
import Input from "../../components/UI/FormElement/input/input";
import { useForm, FormProvider, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import Select from "../../components/UI/FormElement/select/select";
import {
  categoryOPtions,
  propertyTypeOPtions,
  ListingTypeOPtions,
  currencySymbolOPtions,
  ViewOPtions,
  measurementOPtions,
} from "../../pages/dashBoard/pages/uploads/optionsValue";
const style = {
  container: `flex  w-full m-auto  overflow-hidden   `,
  cardContainer: `w-[95%] m-auto rounded-[50px] bg-white shadow-2xl mb-3`,
  card: ` w-full pt-8 pb-5 `,
  form: ` flex flex-wrap justify-between  w-[95%] m-auto`,
  btn: `mt-10 w-[95%] m-auto [&>*]:mr-5`,
  errors: `block text-red-500 capitalize  leading-4 tracking-wide my-4 ml-4`,
};
// justify-between
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
  useFormPersist("filiterSearchKey", {
    watch,
    setValue,
    storage: window.localStorage,
  });

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

    console.log(FormData);
  };
  return (
    <FormProvider {...methods}>
      <div className={style.container}>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <form onSubmit={handleSubmit(submitFilterForm)}>
              <div className={style.form}>
                <Input
                  type="text"
                  placeholder="what are you looking for?"
                  name="searchProperties"
                  required
                  rounded
                  isWhiteBg
                  errors={errors}
                  inputRef={register("searchProperties")}
                />
                <Select
                  placeholder="property Type*"
                  options={propertyTypeOPtions}
                  field={propertyTypeOPtions.find(
                    ({ value }) => value === propertyTypeField.value
                  )}
                  handleSelectChange={handlepropertyTypeChange}
                />
                <Input
                  type="number"
                  placeholder="enter price?"
                  name="searchPrice"
                  required
                  rounded
                  isWhiteBg
                  errors={errors}
                  inputRef={register("searchPrice")}
                />
                <Input
                  type="number"
                  placeholder="Bedrooms?"
                  name="searchBedrooms"
                  required
                  rounded
                  isWhiteBg
                  errors={errors}
                  inputRef={register("searchBedrooms")}
                />
                <Input
                  type="number"
                  placeholder="Bathrooms?"
                  name="searchBed"
                  required
                  rounded
                  isWhiteBg
                  errors={errors}
                  inputRef={register("searchBathrooms")}
                />
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
