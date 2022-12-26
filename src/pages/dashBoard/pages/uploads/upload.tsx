import { lazy, Suspense } from "react";
// import MultiStepContainer from "./components/MultiStepContainer"
const MultiStepContainer = lazy(
  () => import("./components/MultiStepContainer")
);

const upload = () => {
  return (
    <Suspense
      fallback={
        <div>
          <p>Loading...</p>
        </div>
      }
    >
      <MultiStepContainer />
    </Suspense>
  );
};

export default upload;
