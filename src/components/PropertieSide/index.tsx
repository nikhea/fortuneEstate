import { useQuery } from "react-query";
import { getAllProperties } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";
import FeaturedListing from "../propertiesList/featuredListing";

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
  full: ` col-start-1 col-end-11`,
};
const index = () => {
  const { data: properties, isLoading } = useQuery(
    [queryKeys.properties],
    () => getAllProperties(),
    {
      keepPreviousData: true,
    }
  );
  if (isLoading) {
    return null;
  }
  const propertiesResult = properties?.data.results[0].data || [];
  return (
    <div className={style.colLeft}>
      <div className={style.newListing}>
        <h1 className={style.newListingTitle}> search</h1>
        <h3 className="divider"></h3>
      </div>
      <div className={style.newListing}>
        <h1 className={style.newListingTitle}>new listing</h1>
        <h3 className="divider"></h3>
      </div>
      <FeaturedListing properties={propertiesResult} />
    </div>
  );
};

export default index;
