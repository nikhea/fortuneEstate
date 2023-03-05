import "./style/dashboardProperties.css";
import HeaderNavigation from "./Components/Header/HeaderNavigation";
import ProperiesData from "./Components/ProperiesData";
import Filiters from "./Components/Header/Filiters";

const style = {
  container: `w-[95%] m-auto my-[2rem] overflow-hidden text-[#11142D]`,
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem] capitalize`,
  subContainer: ``,
};
const Properties = () => {
  return (
    <div className={style.container}>
      <HeaderNavigation />
      <div className="dashboardProperties">
        <Filiters />
        <ProperiesData />
      </div>
    </div>
  );
};

export default Properties;

// const [pageNumber, setPageNumber] = useState(1);
// const [limitProperties, setLimitProperties] = useState(10);
// const [sortProperties, setSortProperties] = useState(1);

// const { data: properties, isLoading } = useQuery(
//   [queryKeys.properties, pageNumber, limitProperties, sortProperties],
//   () => getAllProperties(pageNumber, limitProperties, sortProperties),
//   {
//     keepPreviousData: true,
//   }
// );
// if (isLoading) {
//   return <PageLoading />;
// }
// if (!properties?.data.results[0].metadata[0]) {
//   return null;
// }

// const metadata = properties?.data.results[0].metadata[0];

// const propertiesResult = properties?.data.results[0].data || [];
// const handlePageClick = (page: SetStateAction<number>) => {
//   setPageNumber(page);
// };
// const nextpage = () => {
//   if (metadata.page < metadata.total_Pages) {
//     setPageNumber(metadata.page + 1);
//   }
// };
// const previouspage = () => {
//   if (metadata.page > 1) {
//     setPageNumber(metadata.page - 1);
//   }
// };
