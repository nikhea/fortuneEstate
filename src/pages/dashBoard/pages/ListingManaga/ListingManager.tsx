import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProperties } from "../../../../services/api/shared";
import { queryKeys } from "../../../../utils/queryKey";

interface ListingManagerProps {}
const style = {
  bg: `bg-white h-screen`,
  container: `w-[95%] m-auto my-5 `,
};
const ListingManager: FC<ListingManagerProps> = () => {
  const {
    data: propertiesdata,
    error,
    isLoading,
  } = useQuery([queryKeys.properties], () => getAllProperties());
  const properties = propertiesdata?.data;
  console.log(properties);

  return (
    <div className={style.container}>
      <div className={style.bg}>listing manage</div>
    </div>
  );
};

export default ListingManager;
