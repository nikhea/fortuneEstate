import { FC } from "react";
// import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { getAgentProperties } from "../../../../services/api/agent";
import { deleteProperties } from "../../../../services/api/agent";
import { queryKeys } from "../../../../utils/queryKey";
import PropertiesList from "./components/propertiesList";

interface ListingManagerProps {}

const style = {
  bg: `font-Montserrat text-[#0D304A]`,
  container: `w-[95%] m-auto my-5 `,
};
const ListingManager = () => {
  const queryClient = useQueryClient();
  const { data: propertiesdata, isLoading } = useQuery(
    [queryKeys.properties],
    () => getAgentProperties(),
    {
      onSuccess: () => {
        //invalidate cached properties query and refresh
        // @ts-ignore
        // queryClient.invalidateQueries(queryKeys.properties);
      },
    }
  );
  const { mutateAsync, status, data } = useMutation(deleteProperties, {
    onSuccess: () => {
      //invalidate cached properties query and refresh
      // @ts-ignore
      queryClient.invalidateQueries(queryKeys.properties);
    },
  });
  const DeleteProperty = async (id: string) => {
    await mutateAsync(id);
    // console.log(data?.message);
  };

  const OnEditProperty = (id: string) => {
    console.log("listing propertyID", id);
    // console.log(data);
  };

  const OnDeleteProperty = (id: string) => {
    DeleteProperty(id);
  };
  // propertiesdata?.data ||
  const propertiesResult: any[] = propertiesdata?.data || [];

  const loadProperties = propertiesResult.map((property: any) => (
    <div key={property._id}>
      <PropertiesList
        OnEditProperty={OnEditProperty}
        OnDeleteProperty={OnDeleteProperty}
        {...property}
      />
    </div>
  ));
  return (
    <>
      {loadProperties.length !== 0 ? (
        <div className={style.container}>
          <div className={style.bg}>
            {isLoading ? "loading" : loadProperties}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ListingManager;
