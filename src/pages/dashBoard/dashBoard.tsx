import { FC, Suspense, lazy } from "react";
import PageLoading from "../../components/UI/Loading/PageLoading";
import { SEO } from "../../components/seo/seo";

const DashBoardLazy = lazy(() => import("./dashBoardLazy"));

const style = {
  container: `w-[95%] m-auto my-[2rem] overflow-hidden`,
  h1: `text-[#11142D] font-normal text-[2rem]`,
  dividerOneColumn: `grid gap-4 grid-cols-1 my-[2rem]`,
  dividerTwoColumn: `grid gap-4 grid-cols-12 my-[2rem]`,
  dividerThreeColumn: `grid gap-4 grid-cols-1 lg:grid-cols-3 `,
};
const dashBoard: FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <SEO title="DashBoard" />
      <DashBoardLazy />
    </Suspense>
  );
};

export default dashBoard;
