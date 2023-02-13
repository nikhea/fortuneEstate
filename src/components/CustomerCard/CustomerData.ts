import Frame1040 from "./img/Frame1.svg";
import Frame1041 from "./img/Frame2.svg";

export interface ICustomer {
  _id?: string;
  title: string;
  image: string;
  price: string;
  percentage: string;
}
export interface ICustomerProps {
  CustomerData: ICustomer[];
}

export const CustomerData: ICustomer[] = [
  {
    _id: "1",
    title: "total customer",
    image: Frame1041,
    price: "5007k",
    percentage: "21.77%",
  },
  {
    _id: "2",
    title: "new customers this month",
    image: Frame1040,
    price: "12k",
    percentage: "18.99%",
  },
];
