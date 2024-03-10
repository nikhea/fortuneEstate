import Pagination from "./pagination";
import PageLoading from "../../../components/UI/Loading/PageLoading";
import MainPagination from "../../../components/Mainpagination";
import useSearchStore from "../../../store/useSearchStore";
// import SimilarProperties from "../../../components/SimilarProperties/SimilarProperties";
const Properties = ({ data }: any) => {
  const { setPageNumber, sortProperties, setSortProperties } = useSearchStore();
  const { data: properties, isLoading } = data;

  if (isLoading) {
    return <PageLoading />;
  }
  if (!properties?.data.results[0].metadata[0]) {
    return null;
  }

  const metadata = properties?.data.results[0].metadata[0];

  const propertiesResult = properties?.data.results[0].data || [];
  const handlePageClick = (page: number) => {
    setPageNumber(page);
  };
  const nextpage = () => {
    if (metadata.page < metadata.total_Pages) {
      setPageNumber(metadata.page + 1);
    }
  };
  const previouspage = () => {
    if (metadata.page > 1) {
      setPageNumber(metadata.page - 1);
    }
  };
  const style = {
    bgContainer: `w-[85%] m-auto `,
    colRight: `col-start-1 col-end-8`,
  };
  return (
    <>
      {/* <div className={style.bgContainer}> */}
      <div className={style.colRight}>
        <MainPagination
          page={metadata.page}
          total_Pages={metadata.total_Pages}
          nextpage={nextpage}
          handlePageClick={handlePageClick}
          previouspage={previouspage}
          propertiesLength={metadata.total}
          sortProperties={sortProperties}
          setSortProperties={setSortProperties}
        >
          <Pagination properties={propertiesResult} />
        </MainPagination>
      </div>
      {/* <SimilarProperties /> */}
      {/* </div> */}
    </>
  );
};

export default Properties;
interface Props {
  properties?: any;
}
// const style = {
//   bgContainer: `md:grid md:grid-cols-10 `,
//   colRight: `col-start-1 col-end-8`,
//   colLeft: `col-start-8 col-end-11    `,
// };

{
  /* <div className={style.colLeft}>
          <PropertieSide />
        </div> */
}
// const { data: properties, isLoading } = useQuery(
//   [queryKeys.properties, pageNumber, limitProperties, sortProperties],
//   () => getAllProperties(pageNumber, limitProperties, sortProperties),
//   {
//     keepPreviousData: true,
//   }
// );

// const [pageNumber, setPageNumber] = useState(1);
// const [limitProperties, setLimitProperties] = useState(1);
// const [sortProperties, setSortProperties] = useState(1);
