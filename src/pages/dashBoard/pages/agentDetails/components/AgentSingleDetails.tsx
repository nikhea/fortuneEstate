import { AiFillCheckCircle } from "react-icons/ai";
import Cards from "./chart/Cards";
import "./style/AgentSingleDetails.css";

const style = {
  container: ` bg-white shadow-lg  rounded-md p-4 h-full text-[#11142D]`,
  moreInfo: `my-5 grid grid-cols-[40px_150px_30px_500px]  w-[50] flex-nowrap`,
};
const AgentSingleDetails = () => {
  const displayMoreInfo = moreInfo.map((info, index) => (
    <div key={index} className={style.moreInfo}>
      <div>{info.icon}</div>
      <div className=" capitalize">{info.title}</div>
      <div>{info.path}</div>
      <div className="text-gray-500">{info.subtitle}</div>
    </div>
  ));
  return (
    <div className={style.container}>
      <div className="text-xl font-medium ">Agent Details</div>
      <div className=" border-x-0 border-2	 my-5 py-3">
        <div className="text-[#808191] font-normal ">
          Talent customers tend to earn a basic salary in the range of £15,000
          to £35,000 per annum. However, talented customers also earn a
          commission for finding their client's work. Typically, agents receive
          around 10% of what the client is paid.
        </div>
        <div className="my-10">{displayMoreInfo}</div>
      </div>
      <div className="mb-10">
        <div className="text-xl font-medium ">Agent status</div>
        <Cards />
      </div>
    </div>
  );
};

const moreInfo = [
  {
    icon: <AiFillCheckCircle color=" #3b5998" size={25} />,
    title: `agency`,
    path: `:`,
    subtitle: `All American Real Estate`,
  },
  {
    icon: <AiFillCheckCircle color=" #3b5998" size={25} />,
    title: `agent license`,
    path: `:`,
    subtitle: `3124 9764 9700 234`,
  },
  {
    icon: <AiFillCheckCircle color=" #3b5998" size={25} />,
    title: `tax number`,
    path: `:`,
    subtitle: `TX 87D0 678H PQ45`,
  },
  {
    icon: <AiFillCheckCircle color=" #3b5998" size={25} />,
    title: `service area`,
    path: `:`,
    subtitle: `Chicago, Los Angeles, New York, Miami beach`,
  },
];
export default AgentSingleDetails;
