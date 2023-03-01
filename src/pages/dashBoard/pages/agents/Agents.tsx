import "./style/dashboardAgent.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Button from "../../../../components/UI/FormElement/Button";
import PageLoading from "../../../../components/UI/Loading/PageLoading";
import AgentImage from "./image/Image Agent.jpg";
import { getAllAgents } from "../../../../services/api/shared";
import { queryKeys } from "../../../../utils/queryKey";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { routes } from "../../../../routes/routes";

const style = {
  container: `w-[95%] m-auto my-[2rem] overflow-hidden text-[#11142D]`,
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem] capitalize`,
  title: `text-[18px] font-[600] text-[#11142d] capitalize`,
  Imgcontainer: `md:h-full max-w-[300px] flex lg:max-w-[200px] lg:max-h-[400px] rounded-[8px]`,
  image: `w-full h-full lg:max-h-[300px] flex rounded-[8px] object-cover`,
  textcontainer: `text-[15px] font-[300] text-[#11142d] mx-3 flex flex-col gap-5  w-full py-1`,
  location: `text-[#8392A5]  flex  items-center space-x-10`,
  subTitile: `capitalize text-[20px] text-gray-400 font-[600]`,
  subContainer: ``,
  left: `flex `,
  right: ``,
};
// font-[400] text-[#8392A5]  flex items-center  flex-nowrap text-[.7rem] md:text-[.9rem]

interface IAgentDetails {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  location: string;
  profile: {
    profileImage: {
      secure_url: string;
    };
  };
}
const Agents = () => {
  const { data: AgentList, isLoading } = useQuery(
    [queryKeys.agents],
    () => getAllAgents(),
    {
      keepPreviousData: true,
    }
  );
  if (isLoading) {
    return <PageLoading />;
  }
  if (!AgentList?.data) {
    return null;
  }
  // <BsThreeDots size={20} color="#808191" />
  // let urlImg = user?.profile?.profileImage?.secure_url;

  const displayAgentList = AgentList.data.map((agent: IAgentDetails) => (
    <div key={agent._id} className=" my-5 bg-whit py-10 px-5 shadow-m ">
      <div className={style.left}>
        <Link to={`${routes.dashboardAgentsDetails}/${agent._id}`}>
          <div className={style.Imgcontainer}>
            <img
              src={agent?.profile?.profileImage?.secure_url}
              alt={agent.firstname}
              className={style.image}
            />
          </div>
        </Link>
        <div className={style.textcontainer}>
          <div className="flex justify-between">
            <div className="">
              <Link to={`${routes.dashboardAgentsDetails}/${agent._id}`}>
                <h1 className={style.title}>
                  {agent.firstname} {agent.lastname}
                </h1>
              </Link>
              <h2 className={style.subTitile}>real estate agent</h2>
            </div>
            <BsThreeDots size={20} color="#808191" />
          </div>
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 gap-x-10 lg:w-[70%]">
            <p className={style.location}>
              <MdEmail size={20} style={{ marginRight: "5px" }} />
              {agent.email}
            </p>
            <div className={style.location}>
              <MdLocationPin size={15} style={{ marginRight: "5px" }} />
              North Carolina, USA
            </div>
            <p className={style.location}>
              <MdCall size={20} style={{ marginRight: "5px" }} />
              +1234 081 032 447 98{" "}
            </p>
            <p className={style.location}>
              <span>
                <HiOutlineBuildingOffice2
                  size={20}
                  style={{ marginRight: "5px" }}
                />
              </span>
              10 properties
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.h1}>agents list</h1>
      </div>
      <div className="dashboardAgent">{displayAgentList}</div>
    </div>
  );
};

export default Agents;

// const agento = {
//   _id: "639e",
//   image:
//     "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png",
//   email: "admin@gmail.com",
//   firstname: "Chandran",
//   lastname: "Kouser",
//   username: "1105151",
//   role: "ADMIN",

// };
{
  /* <div className={style.right}></div> */
}

{
  /* <Link to="/upload">
          <Button isCurve linearGradient uppercase primary padding full>
            <span className="mx-2"> +Add Agent</span>
          </Button>
        </Link> */
}
