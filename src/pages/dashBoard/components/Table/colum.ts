import { format } from "date-fns";
import Moment from "moment";

export const column = [
  { Header: "id", accessor: "id", sticky: "left" },
  { Header: "first name", accessor: "first_name", sticky: "left" },
  { Header: "last name", accessor: "last_name", sticky: "left" },
  {
    Header: "date of birth",
    accessor: (d: any) => {
      return Moment(d.updated_at).local().format("D MMM YYYY");
    },
    // accessor: "date_of_birth",
    // cell: ({ value }: any) => {
    //   console.log(value, "date_of_birth");
    //   return format(new Date(value), 'dd/MM/yyyy');
    // },
    sticky: "left",
  },
  { Header: "age", accessor: "age", sticky: "left" },

  {
    Header: "countrys",
    // accessor: "countrys",
    accessor: (value: any) => {
      return value.countrys >= 10
        ? value
        : `${value.countrys.substring(0, 10)}`;
    },
    sticky: "left",
  },
  { Header: "phone number", accessor: "phone", sticky: "left" },
];
