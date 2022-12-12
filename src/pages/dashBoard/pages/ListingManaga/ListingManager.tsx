import { FC } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllProperties } from "../../../../services/api/shared";
import { queryKeys } from "../../../../utils/queryKey";

import PropertiesList from "./components/propertiesList";
interface ListingManagerProps {}

const style = {
  bg: ``,
  container: `w-[95%] m-auto my-5 `,
};
const ListingManager: FC<ListingManagerProps> = () => {
  const queryClient = useQueryClient();
  const { data: propertiesdata, isLoading } = useQuery(
    [queryKeys.properties],
    () => getAllProperties(),{
          onSuccess: () => {
      //invalidate cached properties query and refresh
      // @ts-ignore
      // queryClient.invalidateQueries(queryKeys.properties);
    },
    }
    
  );
  const properties = propertiesdata?.data;
  console.log(properties, "properties");

  const loadProperties = properties?.results.map((property: any) => (
    <div key={property._id}>
      <PropertiesList {...property} />
    </div>
  ));
  return (
    <div className={style.container}>
      <div className={style.bg}>{isLoading ? "loading" : loadProperties}</div>
    </div>
  );
};

export default ListingManager;
