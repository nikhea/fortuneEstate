import { FC } from "react";

interface ListingManagerProps {}
const style = {
  bg: `bg-white h-screen`,
  container: `w-[95%] m-auto my-5 `,
};
const ListingManager: FC<ListingManagerProps> = () => {
  return (
    <div className={style.container}>
      <div className={style.bg}>listing manage</div>
    </div>
  );
};

export default ListingManager;
