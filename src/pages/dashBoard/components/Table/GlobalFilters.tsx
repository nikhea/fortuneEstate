import { FC } from "react";
import Input from "../../../../components/UI/FormElement/input/input";
interface GlobalFiltersProps {
  filter: any;
  setfilter: any;
}
const GlobalFilters: FC<GlobalFiltersProps> = ({ filter, setfilter }) => {
  return (
    <div className="flex items-center space-x-10 mx-5">
      <h1>Search</h1>
      <Input
        rounded
        bold
        
        // inputHalf
        value={filter || ""}
        onChange={(e: any) => setfilter(e.target.value)}
        type="text"
        placeholder="Search"
        name={""}
      />
    </div>
  );
};

export default GlobalFilters;
