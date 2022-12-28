import { lazy, Suspense } from "react";
// import MultiStepContainer from "./components/MultiStepContainer"
import PageLoading from "../../../../components/UI/Loading/PageLoading";
const MultiStepContainer = lazy(
  () => import("./components/MultiStepContainer")
);

const upload = () => {
  // var IsLoading = true;
  // if (IsLoading) {
  //   return <PageLoading />;
  // }
  return (
    <Suspense fallback={<PageLoading />}>
      <MultiStepContainer />
    </Suspense>

  );
};

export default upload;
