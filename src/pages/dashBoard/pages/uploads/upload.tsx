import { lazy, Suspense } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
// import MultiStepContainer from "./components/MultiStepContainer"
import PageLoading from "../../../../components/UI/Loading/PageLoading";
const MultiStepContainer = lazy(
  () => import("./components/MultiStepContainer")
);

const style = {
  h1: `text-[#11142D] font-normal text-[2rem] capitalize`,
};
const upload = () => {
  // var IsLoading = true;
  // if (IsLoading) {
  //   return <PageLoading />;
  // }
  return (
    <Suspense fallback={<PageLoading />}>
      {/* <div className="flex items-center w-[95%] m-auto my-[2rem]">
        <h1 className={style.h1}>create a new property</h1>
        <BiAddToQueue size={25} color="#11142D" />
      </div> */}
      <MultiStepContainer />
    </Suspense>
  );
};

export default upload;
