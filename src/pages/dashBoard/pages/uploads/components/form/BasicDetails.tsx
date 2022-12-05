import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "./select/select";
import SelectHalf from "./select/selectHalf";
import Button from "../../../../../../components/UI/FormElement/Button";
import { useFormContext, useController } from "react-hook-form";

import {
  categoryOPtions,
  propertyTypeOPtions,
  ListingTypeOPtions,
  currencySymbolOPtions,
  ViewOPtions,
} from "../../optionsValue";
interface BasicDetailsProps {
  // register: any;
  nextStep: any;
  prevStep: any;
  handleCategoryChange?: any;
  SubmitForm: any;
  step: any;
  setStep: any;
  errors: any;
}
const style = {
  inputTitle: `capitalize leading-4 tracking-wide my-4 ml-4`,
  selectTitle: `capitalize leading-4 tracking-wide mt-4 -mb-5 ml-4`,
  hr: ` my-5 w-[100%] text-[3em] font-black `,
  inputDivider: `md:flex  items-center justify-between my-3`,
  selectWidth: `md:w-[48%]`,
  inputWidth: `md:w-[48%]`,

  errors: `block `,
};
const BasicDetails: FC<BasicDetailsProps> = ({
  // register,
  nextStep,
  prevStep,
  // handleCategoryChange,
  SubmitForm,
  step,
  setStep,
  errors,
}) => {
  const { register, control } = useFormContext();
  const continues = (e: any) => {
    e.preventDefault();
    nextStep();
  };
  const { field: categoryField } = useController({ name: "category", control });
  const { field: propertyTypeField } = useController({
    name: "propertyType",
    control,
  });
  const { field: ListingTypeField } = useController({
    name: "ListingType",
    control,
  });
  const { field: currencySymbolField } = useController({
    name: "priceSymbol",
    control,
  });
  const { field: viewField } = useController({
    name: "view",
    control,
  });
  const handleCategoryChange = (option: any) => {
    categoryField.onChange(option.value);

    return categoryField.onChange(option.value);
  };
  const handlepropertyTypeChange = (option: any) => {
    propertyTypeField.onChange(option.value);

    return propertyTypeField.onChange(option.value);
  };
  const handleListingTypeChange = (option: any) => {
    ListingTypeField.onChange(option.value);

    return ListingTypeField.onChange(option.value);
  };
  const handlecurrencySymbolFieldChange = (option: any) => {
    currencySymbolField.onChange(option.value);

    return currencySymbolField.onChange(option.value);
  };
  const handleViewChange = (option: any) => {
    viewField.onChange(option.value);

    return viewField.onChange(option.value);
  };

  return (
    <div>
      <h1>BasicDetails</h1>

      <span>
        <h1 className={style.inputTitle}>property title</h1>
        <Input
          type="text"
          name="title"
          placeholder="property title*"
          inputFull
          required
          isWhiteBg
          rounded
          errors={errors}
          inputRef={register("title", { required: true })}
        />
        <p className={style.errors}>
          {errors.title?.message && <p>{errors.title?.message}</p>}
        </p>
      </span>
      <span>
        <h1 className={style.inputTitle}>property pageTitle</h1>
        <Input
          type="text"
          name="pageTitle"
          placeholder="property pageTitle*"
          inputFull
          required
          isWhiteBg
          rounded
          errors={errors}
          inputRef={register("pageTitle", { required: true })}
        />
        <p className={style.errors}>
          {errors.pageTitle?.message && <p>{errors.pageTitle?.message}</p>}
        </p>
      </span>
      <span>
        <h1 className={style.inputTitle}>property description</h1>
        <Input
          type="text"
          name="description"
          placeholder="property description*"
          inputFull
          isWhiteBg
          required
          rounded
          errors={errors}
          inputRef={register("description", { required: true })}
        />
        <p className={style.errors}>
          {errors.description?.message && <p>{errors.description?.message}</p>}
        </p>
      </span>
      <span className={style.inputDivider}>
        <div className={style.selectWidth}>
          <h1 className={style.inputTitle}>category*</h1>
          <Select
            inputFull
            placeholder="Category*"
            options={categoryOPtions}
            field={categoryOPtions.find(
              ({ value }) => value === categoryField.value
            )}
            handleSelectChange={handleCategoryChange}
          />
          <p className={style.errors}>{errors.category?.message}</p>
        </div>

        <div className={style.selectWidth}>
          <h1 className={style.inputTitle}>property type*</h1>
          <Select
            // inputHalf
            placeholder="property Type*"
            options={propertyTypeOPtions}
            field={propertyTypeOPtions.find(
              ({ value }) => value === propertyTypeField.value
            )}
            handleSelectChange={handlepropertyTypeChange}
          />
          <p className={style.errors}>{errors.propertyType?.message}</p>
        </div>
      </span>
      <span className={style.inputDivider}>
        <div className={style.selectWidth}>
          <h1 className={style.inputTitle}> listing type*</h1>
          <Select
            inputFull
            placeholder=" Listing Type*"
            options={ListingTypeOPtions}
            field={ListingTypeOPtions.find(
              ({ value }) => value === ListingTypeField.value
            )}
            handleSelectChange={handleListingTypeChange}
          />
          <p className={style.errors}>{errors.listingType?.message}</p>
        </div>

        <div className={style.selectWidth}>
          <h1 className={style.inputTitle}> view*</h1>
          <Select
            inputFull
            placeholder="view*"
            options={ViewOPtions}
            field={ViewOPtions.find(({ value }) => value === viewField.value)}
            handleSelectChange={handleViewChange}
          />
          <p className={style.errors}>{errors.view?.message}</p>
        </div>
      </span>
      <span className={style.inputDivider}>
        <div className={style.inputWidth}>
          <h1 className={style.inputTitle}>price*</h1>
          <Input
            type="number"
            name="price"
            placeholder="price*"
            // inputHalf
            inputFull
            isWhiteBg
            required
            rounded
            errors={errors}
            inputRef={register("price", { required: true })}
          />
          <p className={style.errors}>
            {errors.price?.message && <p>{errors.price?.message}</p>}
          </p>
        </div>

        <div className={style.selectWidth}>
          <h1 className={style.inputTitle}>Currency*</h1>
          <Select
            // inputHalf
            placeholder="currency*"
            options={currencySymbolOPtions}
            field={currencySymbolOPtions.find(
              ({ value }) => value === currencySymbolField.value
            )}
            handleSelectChange={handlecurrencySymbolFieldChange}
          />
          <p className={style.errors}>
            {errors.currencySymbol?.message && (
              <p>{errors.currencySymbol.message}</p>
            )}
          </p>
        </div>
      </span>

      <Button onClick={continues}>Continue</Button>
    </div>
  );
};

export default BasicDetails;

// const submitForm = (data: any) => {
//   console.log(handleSubmit);

//   if (data) {
//     console.log(data, "data");
//   }
//   if (!data) console.log(data, "no data");

//   reset();
// };
