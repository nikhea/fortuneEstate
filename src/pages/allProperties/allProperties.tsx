import { useQuery } from "react-query";
import { getAllProperties } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties";
import FilterCard, { FormFilterData } from "../../components/card/filterCard";
import Properties from "./components/Properties";
import useQueryStringStore from "../../store/useQueryStore";
import { useLocation, useNavigate } from "react-router-dom";
import useSearchStore from "../../store/useSearchStore";
import { useEffect, useState } from "react";
const AllProperties = () => {
  const location = useLocation();
  const { formData, pageNumber, limitProperties, sortProperties } =
    useSearchStore();
  const queryParams = new URLSearchParams(location.search);

  const queryParamsObject = Object.fromEntries(queryParams.entries());

  const data = useQuery(
    [queryKeys.properties, queryParamsObject, sortProperties, pageNumber],
    () => getAllProperties(queryParamsObject, sortProperties, pageNumber),
    {
      keepPreviousData: true,
    }
  );
  const [datas, setDatas] = useState({});
  const { queryString, setQueryString } = useQueryStringStore();

  const navigate = useNavigate();

  // useEffect(() => {
  //   PageParams();
  //   updateQueryStringAndNavigate(
  //     formData,
  //     pageNumber,
  //     limitProperties,
  //     sortProperties
  //   );
  // }, [pageNumber]);
  const updateQueryStringAndNavigate = (
    formData?: any,
    pageNumber?: any,
    limitProperties?: any,
    sortProperties?: any,
    checkShow?: any
  ) => {
    const filteredFormData = { ...formData };
    filteredFormData;

    Object.keys(filteredFormData).forEach((key) => {
      if (filteredFormData[key] === undefined || filteredFormData[key] === "") {
        delete filteredFormData[key];
      }
    });
    // if (pageNumber !== 1 || pageNumber < 1) {
    filteredFormData["pageNumber"] = pageNumber;
    // }
    filteredFormData["limit"] = limitProperties;
    filteredFormData["sort"] = sortProperties;
    if (checkShow) {
      filteredFormData["show"] = "true";
    }
    setDatas(filteredFormData);
    const newQueryString = new URLSearchParams(filteredFormData).toString();

    setQueryString(newQueryString);
    navigate({ pathname: window.location.pathname, search: newQueryString });
  };

  const PageParams = (formData?: any, checkShow?: any) => {
    updateQueryStringAndNavigate(
      formData,
      pageNumber,
      limitProperties,
      sortProperties,
      checkShow
    );
  };

  const style = {
    bgContainer: `w-[85%] m-auto `,
    colRight: `col-start-1 col-end-8`,
  };
  return (
    <>
      <FilterCard PageParams={PageParams} />
      <div className={style.bgContainer}>
        <Properties data={data} />
        <SimilarProperties />
      </div>
    </>
  );
};

export default AllProperties;
interface Props {
  properties?: any;
}
// const { data: properties, isLoading } = useQuery(
//   [queryKeys.properties, pageNumber, limitProperties, sortProperties],
//   () => getAllProperties(pageNumber, limitProperties, sortProperties),
//   {
//     keepPreviousData: true,
//   }
// );
// useEffect(() => {
//   PageParams();
// }, [pageNumber, formData, limitProperties, sortProperties]);
// formData?: FormFilterData, checkShow?: any
// useEffect(() => {
//   const filteredFormData: any = {};

//   filteredFormData["pageNumber"] = pageNumber;
//   filteredFormData["limitProperties"] = limitProperties;
//   filteredFormData["sortProperties"] = sortProperties;

//   const newQueryString = new URLSearchParams(filteredFormData).toString();
//   setQueryString(newQueryString);

//   navigate({
//     pathname: window.location.pathname,
//     search: newQueryString,
//   });
// }, [pageNumber, formData, limitProperties, sortProperties]);

// const PageParams = (checkShow?: any) => {
//   const { ...filteredFormDatas } = formData;
//   const filteredFormData = Object.entries(filteredFormDatas)
//     .filter(([key, value]) => value !== undefined && value !== "")
//     .reduce((obj: any, [key, value]) => {
//       obj[key] = value;
//       return obj;
//     }, {});
//   if (checkShow) {
//     filteredFormData["show"] = "true";
//   }
//   filteredFormData["pageNumber"] = pageNumber;
//   filteredFormData["limitProperties"] = limitProperties;
//   filteredFormData["sortProperties"] = sortProperties;

//   const newQueryString = new URLSearchParams(filteredFormData).toString();
//   setQueryString(newQueryString);

//   navigate({
//     pathname: window.location.pathname,
//     search: newQueryString,
//   });
// };
// useEffect(() => {
//   PageParams();
// updateQueryStringAndNavigate(
//   formData,
//   pageNumber,
//   limitProperties,
//   sortProperties
// );
// }, [formData, pageNumber, limitProperties, sortProperties]);
