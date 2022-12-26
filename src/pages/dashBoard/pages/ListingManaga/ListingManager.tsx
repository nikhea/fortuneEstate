import { FC } from "react";
// import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { getAgentProperties } from "../../../../services/api/agent";
import { deleteProperties } from "../../../../services/api/agent";
import { queryKeys } from "../../../../utils/queryKey";
import PropertiesList from "./components/propertiesList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Await } from "react-router-dom";

const style = {
  bg: `font-Montserrat text-[#0D304A] grid grid-cols-1 md:grid-cols-2 `,
  container: `w-[95%] m-auto my-5 `,
};
const ListingManager = () => {
  let loadProperties;
  const queryClient = useQueryClient();
  const {
    data: propertiesdata,
    isLoading,
    status: loadingStatus,
  } = useQuery([queryKeys.properties], () => getAgentProperties(), {
    onSuccess: () => {
      //invalidate cached properties query and refresh
      // @ts-ignore
      // queryClient.invalidateQueries(queryKeys.properties);
    },
  });
  const {
    mutateAsync,
    status: deleteStatus,
    data: deleteData,
  } = useMutation(deleteProperties, {
    onSuccess: () => {
      //invalidate cached properties query and refresh
      // @ts-ignore
      queryClient.invalidateQueries();
      queryClient.invalidateQueries(queryKeys.properties);
    },
  });
  const DeleteProperty = async (id: string) => {
    await mutateAsync(id);
  };

  const OnEditProperty = (id: string) => {
    console.log("listing propertyID", id);
    // console.log(data);
  };

  const OnDeleteProperty = async (id: string) => {
    console.log(deleteStatus, "st");
    DeleteProperty(id);
    //    if (deleteStatus === "loading") {
    //   toast.warning("deleting");
    // }
    // if (deleteData?.status === 200) {
    //   toast.success("Property deleted Successfully");
    // }
  };

  // propertiesdata?.data ||
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (loadingStatus === "success") {
    if (Array.isArray(propertiesdata?.data)) {
      const propertiesResult = propertiesdata?.data || [];
      loadProperties = propertiesResult?.map((property: any) => (
        <div key={property._id}>
          <PropertiesList
            OnEditProperty={OnEditProperty}
            OnDeleteProperty={OnDeleteProperty}
            {...property}
          />
        </div>
      ));
    }
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.bg}>{loadProperties}</div>
      </div>
    </>
  );
};

export default ListingManager;

{
  /* {loadProperties?.length !== 0 ? ( */
}
//    <div className={style.container}>
//    <div className={style.bg}>{loadProperties}</div>
//  </div>
{
  /* ) : null} */
}
