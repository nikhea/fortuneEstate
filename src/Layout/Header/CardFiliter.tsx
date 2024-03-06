import * as yup from "yup";
import Button from "../../components/UI/FormElement/Button";
import Input from "../../components/UI/FormElement/input/input";
import { useForm, FormProvider, useController } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import Select from "../../pages/dashBoard/pages/uploads/components/form/select/select";
import { propertyTypeOPtions } from "../../pages/dashBoard/pages/uploads/optionsValue";
const style = {
  container: ` mt-[24px] text-black  w-[60%] rounded-2xl     `,
  cardContainer: ` w-full  rounded-[10px] bg-gray-100 shadow-2xl`,
  card: ` w-full py-4 `,
  form: `w-[85%] lg:w-[90%]  m-auto flex  flex-col `,
  btn: `  [&>*]:mr-5 [&>*]:px-[4em] mt-[20px]`,
  errors: `block text-red-500 capitalize  leading-4 tracking-wide my-4 ml-4`,
  fillitersInput: `lg:flex flex-col md:flex-row justify-between lg:gap-6 items-center   sm:[&>*]:w-[95%] w-full lg:[&>*]:w-[60%]`,
  searchInput: `  `,
};
const CardFiliter = () => {
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

  //   const { field: propertyTypeField } = useController({
  //     name: "searchPropertyType",
  //     control,
  //   });

  //   const handlepropertyTypeChange = (option: any) => {
  //     propertyTypeField.onChange(option.value);

  //     return propertyTypeField.onChange(option.value);
  //   };
  const handleRset = () => {
    // setValue("searchPropertyType", "");
    reset();
  };
  const submitFilterForm = (formData: any) => {
    console.log(formData, "filter Data");
  };

  const title = watch("searchProperties");
  return (
    <div className={style.container}>
      <FormProvider {...methods}>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <form onSubmit={handleSubmit(submitFilterForm)}>
              <div className={style.form}>
                <div className={style.searchInput}>
                  <Input
                    type="text"
                    placeholder="what are you looking for"
                    name="searchProperties"
                    rounded
                    inputFull
                    errors={errors}
                    inputRef={register("searchProperties")}
                    isBlackBg
                  />
                </div>
                <div className={style.fillitersInput}>
                  <Input
                    type="number"
                    placeholder="Enter Price"
                    name="searchPrice"
                    rounded
                    isWhiteBg
                    errors={errors}
                    inputRef={register("searchPrice")}
                  />
                  <Input
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
                  />
                  {/* <div className="-mt-[1.1%] w-full  -mb-"></div> */}
                  {/* <Select
                    placeholder="Type*"
                    options={propertyTypeOPtions}
                    field={propertyTypeOPtions.find(
                      ({ value }) => value === propertyTypeField.value
                    )}
                    handleSelectChange={handlepropertyTypeChange}
                    inputFull
                  /> */}
                  {/* </div> */}
                </div>
              </div>
              <div className={style.btn}>
                <Button types="submit" primary rounded linearGradient uppercase>
                  Search
                </Button>
                <Button
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
  searchProperties: string;
  //   searchPropertyType: string;
  searchPrice: number;
  searchBedrooms: number;
  searchBathrooms: number;
}
export const uploadSchema = yup.object().shape({
  searchProperties: yup.string(),
  //   searchPropertyType: yup.string(),
  searchPrice: yup.number(),
  searchBedrooms: yup.number(),
  searchBathrooms: yup.number(),
});
