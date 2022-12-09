import { FC, useState, useEffect } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
import { useQuery } from "@tanstack/react-query";
import { useFormContext, useController } from "react-hook-form";
import { getAllCountry } from "../../../../../../services/api/shared";
import { queryKeys } from "../../../../../../utils/queryKey";
import AsyncSelect from "react-select/async";
import Creatable from "react-select/creatable";
// import Select from "react-select";
interface AddressMap {
  register: any;
  nextStep: any;
  prevStep: any;
  SubmitForm: any;
  step: any;
  setStep: any;
  errors: any;
}
const style = {
  errors: `block `,
  inputTitle: `capitalize leading-4 tracking-wide my-4 ml-4`,
  buttonContainer: `flex justify-between items-center`,
};
const AddressMap: FC<AddressMap> = ({
  // register,
  nextStep,
  prevStep,
  SubmitForm,
  step,
  setStep,
  errors,
}) => {
  const [countriesOptions, setCountriesOptions] = useState([""]);
  const {
    data: countries,
    error,
    isLoading,
  } = useQuery([queryKeys.countries], getAllCountry);

  // console.log(countries?.data[0].name);

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
  const {
    register,
    control,
    setValue,
    watch,
    // formState: { errors },
  } = useFormContext();
  const { field: propertycountryField } = useController({
    name: "country",
    control,
  });
  const handleCountryChange = (option: any) => {
    propertycountryField.onChange(option.value);

    return propertycountryField.onChange(option.value);
  };
  // country
  console.log(countriesOptions, "optopmjka;sdjjlsk");
  // if (!countriesOptions) {
  //   return <h1>....Loading properties </h1>;
  // } else {
  //   return <h1>.{JSON.stringify(countriesOptions)}</h1>;
  // }
  const continues = (e: any) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      {/* <h1>AddressMap</h1> */}
      <span>
        <h1 className={style.inputTitle}>country</h1>

        <Select
          inputFull
          placeholder="Countries*"
          options={countriesOptions}
          field={countriesOptions.find(
            ({ value }: any) => value === propertycountryField.value
          )}
          handleSelectChange={handleCountryChange}
          // onChange={handleCountryChange}
        />
        <p className={style.errors}>
          {errors.country?.message && <p>{errors.country?.message}</p>}
        </p>
      </span>
      <span>
        <h1 className={style.inputTitle}>street</h1>

        <Input
          type="text"
          name="street"
          placeholder="street*"
          inputFull
          required
          isWhiteBg
          rounded
          errors={errors}
          inputRef={register("street", { required: true })}
        />
        <p className={style.errors}>
          {errors.street?.message && <p>{errors.street?.message}</p>}
        </p>
      </span>
      <span>
        <h1 className={style.inputTitle}>city</h1>

        <Input
          type="text"
          name="city"
          placeholder="city*"
          inputFull
          required
          isWhiteBg
          rounded
          errors={errors}
          inputRef={register("city", { required: true })}
        />
        <p className={style.errors}>
          {errors.city?.message && <p>{errors.city?.message}</p>}
        </p>
      </span>
      <div className={style.buttonContainer}>
        <Button rounded primary Color="#8392A5" onClick={previous}>
          Pre
        </Button>
        <Button rounded primary Color="#8392A5" onClick={continues}>
          Continue
        </Button>
      </div>
    </div>
  );
};

{
  /* <Input
type="text"
name=" country"
placeholder="country*"
inputFull
required
isWhiteBg
rounded
errors={errors}
inputRef={register("country", { required: true })}
/> */
}
export default AddressMap;
