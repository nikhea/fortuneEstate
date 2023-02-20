import { FC } from "react";
import Input from "../../../../components/UI/FormElement/input/input";
interface GlobalFiltersProps {
  filter: any;
  setfilter: any;
}
const GlobalFilters: FC<GlobalFiltersProps> = ({ filter, setfilter }) => {
  return (
    <div className="">
      {/* <h1>Search</h1> */}
      <Input
        rounded
        isWhiteBg
        // inputHalf
        value={filter || ""}
        onChange={(e: any) => setfilter(e.target.value)}
        type="text"
        placeholder="Search"
        name={""}
        Width="30%"
      />
    </div>
  );
};
{
  /* <Input
type="number"
placeholder="Bathrooms?"
name="searchBed"
rounded
inputFull
isWhiteBg
errors={errors}
inputRef={register("searchBathrooms")}
/> */
}

export default GlobalFilters;
