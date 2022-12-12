import { FC } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getAllProperties } from "../../../../services/api/shared";
import { deleteProperties } from "../../../../services/api/agent";
import { queryKeys } from "../../../../utils/queryKey";
import PropertiesList from "./components/propertiesList";

interface ListingManagerProps {}

const style = {
  bg: `font-Montserrat text-[#0D304A]`,
  container: `w-[95%] m-auto my-5 `,
};
const ListingManager: FC<ListingManagerProps> = () => {
  const queryClient = useQueryClient();
  const { data: propertiesdata, isLoading } = useQuery(
    [queryKeys.properties],
    () => getAllProperties(),
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
    console.log(data);
    
  };

  const OnDeleteProperty = (id: string) => {
    DeleteProperty(id);
  };

  const properties = propertiesdata?.data;
  const loadProperties = properties?.results.map((property: any) => (
    <div key={property._id}>
      <PropertiesList
        OnEditProperty={OnEditProperty}
        OnDeleteProperty={OnDeleteProperty}
        {...property}
      />
    </div>
  ));
  return (
    <div className={style.container}>
      <div className={style.bg}>{isLoading ? "loading" : loadProperties}</div>
    </div>
  );
};

export default ListingManager;
