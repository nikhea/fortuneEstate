import { FC } from "react";
import {
  MdOutlineGridView,
  MdOutlineList,
  MdOutlineHome,
} from "react-icons/md";
import { useController, useForm } from "react-hook-form";
import Select from "../UI/FormElement/select/select";
const style = {
  bgContainer: `bg-[#F6F6F6] py-[6em]  pl-[2em] overflow-hidden md:grid md:grid-cols-10`,
  container: ` w-full md:grid grid-cols-1 md:grid-cols-2   m-0 p-0 `,
  colLeft: ` flex flex-col  col-start-8 col-end-11 -mt-10 m-auto ml-[1em] mr-[2em]    `,
  newListing: ``,
  newListingTitle: `text-[1.5rem] uppercase z-1 p-0 text-[#0D304A] text-center  unset font-[500] m-10`,
  header: `flex  justify-between items-center my-20 mx-10 gap-10`,
  icons: `text-[#09203F] cursor-pointer hover:text-[#736efe] active:text-[#736efe] mx-1`,
  headerText: `mt-[px] capitalize text-[#09203F] font-bold tracking-widest `,
  headerLength: `flex items-end `,
  headerView: `flex items-center hidden lg:flex`,
  headerSort: `flex items-center `,
  headerSelect: `
   my-[10px]  py-[15px] px-[23px]  
  text-[.9375rem]   pr-[23px] outline-none  bg-[#f1f1f1] outline-none text-[#9a9a9a]
  border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-sky-500
  rounded-[25px]
  w-[20%];
  lg:w-full 
  `,
};
interface IHeader {
  propertiesLength: number;
  sortProperties: any;
  setSortProperties: any;
}
const header: FC<IHeader> = ({
  propertiesLength,
  sortProperties,
  setSortProperties,
}) => {
  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    // console.log(event.target.value);
    setSortProperties(event.target.value);
  };
  const { field: SortField } = useController({
    name: "Sort",
    control,
  });
  const handleSortChange = (option: any) => {
    const parsedSort = parseInt(option.value);
    // console.log(parsedSort);
    setSortProperties(parsedSort);
    reset();
    // SortField.onChange(option.value);
    // console.log(option.value);
    // return SortField.onChange(option.value);
  };
  return (
    <div className={style.header}>
      <div className={style.headerLength}>
        <div className={style.icons}>
          <MdOutlineHome size={40} color="#736efe" />
        </div>
        <div className={style.headerText}>
          <h1> {propertiesLength} available properties</h1>
        </div>
      </div>

      <div className={style.headerSort}>
        <div className={style.headerView}>
          <div className={style.icons}>
            <MdOutlineList size={30} color="#" />
          </div>
          <div className={style.icons}>
            <MdOutlineGridView size={30} color="#" />
          </div>
        </div>

        <div className="-mt-[5%] w-full">
          <Select
            placeholder="Ascending"
            options={options}
            field={options.find(({ value }) => value === SortField.value)}
            handleSelectChange={handleSortChange}
            inputFull
          />
        </div>
      </div>
    </div>
  );
};

export default header;
const options = [
  { value: "1", label: "Ascending" },
  { value: "-1", label: "Descending" },
  // { value: "vanilla", label: "Religious center descending" },
];

{
  /* <select
          value={sortProperties}
          className={style.headerSelect}
          onChange={handleChange}
        >
          <option value={1}>Religious center ascending</option>
          <option value={-1}>Religious center descending</option>
        </select> */
}
