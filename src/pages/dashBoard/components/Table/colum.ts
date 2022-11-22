import { format } from "date-fns";
import Moment from "moment";

export const column = [
  { Header: "id", accessor: "id", sticky: "left" },
  { Header: "first name", accessor: "first_name", sticky: "left" },
  { Header: "last name", accessor: "last_name", sticky: "left" },
  {
    Header: "date of birth",
    accessor: (d: any) => {
      return Moment(d.updated_at).local().format("DD-MM-YYYY");
    },
    // accessor: "date_of_birth",
    // cell: ({ value }: any) => {
    //   console.log(value, "date_of_birth");
    //   return format(new Date(value), 'dd/MM/yyyy');
    // },
    sticky: "left",
  },
  { Header: "age", accessor: "age", sticky: "left" },
  // { Header: "email", accessor: "email" },
  { Header: "countrys", accessor: "countrys", sticky: "left" },
  { Header: "phone number", accessor: "phone", sticky: "left" },
];
