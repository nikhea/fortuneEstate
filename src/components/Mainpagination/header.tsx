import { FC } from "react";
import {
  MdOutlineGridView,
  MdOutlineList,
  MdOutlineHome,
} from "react-icons/md";
const style = {
  bgContainer: `bg-[#F6F6F6] py-[6em]  pl-[2em] overflow-hidden md:grid md:grid-cols-10`,
  container: ` w-full md:grid grid-cols-1 md:grid-cols-2   m-0 p-0 `,
  colLeft: ` flex flex-col  col-start-8 col-end-11 -mt-10 m-auto ml-[1em] mr-[2em]    `,
  newListing: ``,
  newListingTitle: `text-[1.5rem] uppercase z-1 p-0 text-[#0D304A] text-center  unset font-[500] m-10`,
  header: `flex  justify-between items-center my-20 mx-10`,
  icons: `text-[#09203F] cursor-pointer hover:text-[#736efe] active:text-[#736efe] mx-1`,
  headerText: `mt-[px] capitalize text-[#09203F] font-bold tracking-widest `,
  headerLength: `flex items-end `,
  headerView: `flex items-center `,
  headerSort: `flex items-center`,
  headerSelect: `ml-5`,
};
interface IHeader {
  propertiesLength: number;
}
const header: FC<IHeader> = ({ propertiesLength }) => {
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
        <select className={style.headerSelect}>
          <option value="Religious center ascending">
            Religious center ascending
          </option>
          <option value="Religious center descending">
            Religious center descending
          </option>
        </select>
      </div>
    </div>
  );
};

export default header;
