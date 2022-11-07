import { HTTP_VERBS, GET_CONTINENTS } from "../../utils/constant";
import { request } from "../../utils/axios";
import axios from "axios";
interface getAllCONTINENTS {
  url: string;
  type: string;
}
// http://localhost:1337/api/continents
export const getAllCONTINENTS = async () => {
  const url = GET_CONTINENTS;
  const type = HTTP_VERBS.GET;
  // const res = await request({ url, type });
  const res = await axios.get("http://localhost:1337/api/continents");
  // const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  // return res;
  return {
    status: res.status,
    data: res.data.data,
  };
};
export default (axios: { [x: string]: (arg0: any) => any }) => ({
  //   async getAllContent(url = GET_CONTINENTS, type = HTTP_VERBS.GET) {
  //     const res = await axios[type](url);
  //     return {
  //       status: res.status,
  //       data: res.data,
  //     };
  //   },
  // async getAllCONTINENTS(url = GET_CONTINENTS, type = HTTP_VERBS.GET) {
  //   const res = await request({ url, type });
  //   return {
  //   //   status: res.status,
  //     data: res.data,
  //   };
  // },
});
