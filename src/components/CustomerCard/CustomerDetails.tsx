import { FC } from "react";
import { ICustomer, ICustomerProps } from "./CustomerData";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import CustomerCard from "./CustomerCard";

const style = {
  container: `bg-white shadow-lg rounded-md  h-full w-full`,
  title: `text-[25px] font-[400] text-[#11142d] capitalize`,
  mainFlex: `my-10 flex gap-4 flex-wrap`,
  SubmainFlex: `flex gap-1 flex-wrap items-center`,
  link: ` capitalize p-2 px-3 border border-[4px] rounded-md text-[18px] text-gray-400`,
};
const CustomerDetails: FC<ICustomerProps> = ({ CustomerData }) => {
  const displayCustomer = CustomerData.map(
    (customer: ICustomer, index: number) => (
      <div
        key={customer._id}
        className={
          index === 0 ? "border border-x-0 border-t-0 border-[3px]" : ""
        }
      >
        <CustomerCard
          title={customer.title}
          price={customer.price}
          percentage={customer.percentage}
          image={customer.image}
        />
      </div>
    )
  );
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center p-10 lg:p-5">
        <h1 className={style.title}>customer</h1>
        <BsThreeDotsVertical size={20} color="#808191" />
      </div>
      <div className="h-[90%]  w-full flex flex-col justify-evenly">
        {displayCustomer}
      </div>
    </div>
  );
};

export default CustomerDetails;
