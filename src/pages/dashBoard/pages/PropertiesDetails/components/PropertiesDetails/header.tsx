import { MdLocationPin, MdOutlineFavorite } from "react-icons/md";

const style = {
  header: ` flex justify-between my-5 text-[#2B2B2B]`,
  details: ` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-items-center text-[#2B2B2B] capitalize`,
  description: `w-full font-[400]  text-lg lg:text-[1.2rem] flex items-center text-[#2B2B2B] my-2 capitalize`,
  price: `bg-[#DADEFA] text-[#475BE8] rounded-md px-5 py-3 w-fit text-2xl`,
  priceTage: `font-[500] text-[1.3rem] md:text-2xl  leading-10 capitalize`,
  title: ` font-[500] text-[.8rem] md:text-lg  leading-10`,
  location: `font-[400] text-[#8392A5] leading-10 flex items-center  flex-nowrap text-[.7rem] md:text-[.8rem] uppercase `,
};
const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <h1 className={style.title}>Apartment</h1>
        <h1 className={style.description}>star sun hotel & apartment</h1>
        <p className={style.location}>
          <MdLocationPin size={15} style={{ marginRight: "5px" }} />
          north caroline,usa
        </p>
      </div>
      <div>
        <div>
          {/* <h1>rating</h1> */}
          <p className={style.priceTage}>price</p>
          <p className={style.price}>$ 45,3454</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
