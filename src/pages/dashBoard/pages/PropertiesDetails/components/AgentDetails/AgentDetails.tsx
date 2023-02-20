import { MdLocationPin, MdCall } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import OpenStreetMap from "../../../../../../components/Map/Map";
import { TbMessage } from "react-icons/tb";
import { useAuth } from "../../../../../../lib/auth";
import { FC } from "react";
const style = {
  card: `border-2 rounded-[10px] p-5 py-7 shadow-sm lg:h-[517px]`,
  container: ` p-1  flex h-full justify-between w-full items-center text-[#808191] capitalize mb-5 lg:mb-1`,
  title: `text-[18px] font-[600] text-[#11142d]`,
  mainFlex: `flex flex-col gap-2 flex-nowrap items-center text-center py-10`,
  SubmainFlex: ``,
  Imgcontainer: `w-[100px] h-[100px] rounded-full`,
  image: `w-full h-full rounded-full object-cover`,
  textcontainer: `text-[15px] font-[300] text-[#11142d] mx-3 `,
  location: `font-[400] text-[#8392A5]  flex items-center  flex-nowrap text-[.7rem] md:text-[.9rem] `,
  subTitile: `capitalize text-[20px] text-gray-400 font-[600]`,
  btn: `
  border border-solid bg-transparen 
  min-w-[100px] not-italic font-[400] text-[14px] 
  capitalize text-white
  flex items-center justify-center w-ful
  outline-none cursor-pointer mx-0 py-[1.3em] px-5 rounded-[10px]`,
};
interface IAgentDetails {
  UserID: any;
}
const AgentDetails: FC<IAgentDetails> = ({ UserID }) => {
  const { user } = useAuth();
  console.log(UserID, user?._id);

  const address = {
    country: "United States",
    street: "123 Chestnut St, Williamstown, Berkshire County,",
    city: "Massachusetts",
    _id: "63a8a1e4a7c115b135bd8471",
  };
  return (
    <div className="flex flex-col gap-5">
      <div className={style.card}>
        <span className="flex justify-end items-center mb-3">
          <BsThreeDots size={20} color="#808191" />
        </span>
        <div className={style.mainFlex}>
          <div className={style.Imgcontainer}>
            <img
              src={agent.image}
              alt={agent.firstname}
              className={style.image}
            />
          </div>
          <div className={style.textcontainer}>
            <h1 className={style.title}>
              {agent.firstname} {agent.lastname}
            </h1>
            <h2 className={style.subTitile}> agent</h2>
          </div>
          <div className={style.location}>
            <MdLocationPin size={15} style={{ marginRight: "5px" }} />
            North Carolina, USA
          </div>
          <p>10 properties</p>
        </div>
        <div className="">
          {UserID === user?._id ? (
            <div className="flex items-center justify-center flex-nowrap my-5 gap-5">
              <button
                className={style.btn}
                style={{
                  backgroundColor: "#475BE8",
                }}
              >
                <TbMessage size={20} style={{ marginRight: "5px" }} />
                edit
              </button>
              <button
                className={style.btn}
                style={{
                  backgroundColor: "red",
                }}
              >
                <MdCall size={20} style={{ marginRight: "5px" }} />
                delete
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-nowrap my-5 gap-5">
              <button
                className={style.btn}
                style={{
                  backgroundColor: "#475BE8",
                }}
              >
                <TbMessage size={20} style={{ marginRight: "5px" }} />
                message
              </button>
              <button
                className={style.btn}
                style={{
                  backgroundColor: "#2ED480",
                }}
              >
                <MdCall size={20} style={{ marginRight: "5px" }} />
                call
              </button>{" "}
            </div>
          )}
        </div>
      </div>
      <OpenStreetMap address={address} />
      <button
        className={style.btn}
        style={{
          backgroundColor: "#475BE8",
        }}
      >
        <MdCall size={20} style={{ marginRight: "5px" }} />
        buy now
      </button>
    </div>
  );
};

export default AgentDetails;

const agent = {
  _id: "639e",
  image: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
  email: "admin@gmail.com",
  firstname: "Chandran",
  lastname: "Kouser",
  username: "1105151",
  role: "ADMIN",
  //   length:10
};

//  <button
//           className={style.btn}
//           style={{
//             backgroundColor: "#475BE8",
//           }}
//         >
//           <TbMessage size={20} style={{ marginRight: "5px" }} />
//           message
//         </button>
//         <button
//           className={style.btn}
//           style={{
//             backgroundColor: "#2ED480",
//           }}
//         >
//           <MdCall size={20} style={{ marginRight: "5px" }} />
//           call
//         </button>
