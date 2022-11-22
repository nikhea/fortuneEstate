import { format } from "date-fns";
import Moment from "moment";

export const column = [
  { Header: "id", accessor: "id" },
  { Header: "first name", accessor: "first_name" },
  { Header: "last name", accessor: "last_name" },
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
  },
  { Header: "age", accessor: "age" },
  // { Header: "email", accessor: "email" },
  { Header: "countrys", accessor: "countrys" },
  { Header: "phone number", accessor: "phone" },
];
