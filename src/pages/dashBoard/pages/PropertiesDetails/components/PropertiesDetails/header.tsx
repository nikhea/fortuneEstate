const style = {
  header: ` flex items-center  w-full mb-5`,
  title: `ml-5 capitalize font-[600] text-[1.75rem]`,
  details: ` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-items-center text-[#2B2B2B] capitalize`,
  description: `w-full font-[400]  text-lg lg:text-base flex items-center text-[#2B2B2B]`,
};
const Header = () => {
  return (
    <div className="flex justify-between my-5 text-[#2B2B2B]">
      <div>
        <h1>Apartment</h1>
        <h1>star sun hotel & Apartment</h1>
        <p>north caroline,usa</p>
      </div>
      <div>
        <div>
          <h1>rating</h1>
          <p>price</p>
          <p>$ 45,3454</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
