import "./style/agentInfo.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { useAuth } from "../../../../../lib/auth";
import { IAgentDetail } from "../../../../../interfaces/Agent";

const style = {
  container: ` bg-white shadow-lg  rounded-md  h-full`,
  imgContainer: `bg-red-200 w-full h-[250px] rounded-md relative rounded-b-xl mb-20 object-cover bg-no-repeat`,
  profileImg: `shadow-2xl h-[100px] w-[100px] bg-red-500 rounded-full absolute -bottom-[55px] left-5 border-2 object-cover`,
  thumbnailImage: `h-full w-full bg-red-500 rounded-full object-cover `,
  textContainer: `m-4 capitalize overflow-hidde flex flex-col`,
  textItem: `grid grid-cols-[100px_minmax(900px,_1fr)] my-3`,
  textItemH1: `text-gray-500 lg:text-[0.8em]`,
  textItemSpan: `text-[#11142D] lg:text-[0.8em]`,
  social: `grid place-items-center my-2`,
};
let urlImg = `https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`;

const AgentInfo = ({ agentData }: IAgentDetail) => {
  console.log(agentData, "agentData");

  const { user } = useAuth();

  return (
    <div className={style.container}>
      <div
        className={style.imgContainer}
        style={{
          backgroundImage: `url(${agentData?.profile?.profileImage?.secure_url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // backgroundPosition: "100px",
        }}
      >
        <div className={style.profileImg}>
          <LazyLoadImage
            className={style.thumbnailImage}
            src={agentData?.profile?.profileImage?.secure_url}
          />
        </div>
        <div className="absolute -bottom-[55px] left-32 capitalize">
          <h1>{`${agentData?.firstname} ${agentData?.lastname}`}</h1>
          <span className=" text-gray-500">{agentData?.role}</span>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>agent:</h1>
          <span className={style.textItemSpan}>{agentData?.profile?.age}</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>city:</h1>
          <span className={style.textItemSpan}>{agentData?.profile?.city}</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>state:</h1>
          <span className={style.textItemSpan}>
            {agentData?.profile?.state}
          </span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>country:</h1>
          <span className={style.textItemSpan}>
            {agentData?.profile?.country}
          </span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>post code:</h1>
          <span className={style.textItemSpan}>
            {agentData?.profile?.postcode}
          </span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>agent ID:</h1>
          <span className={style.textItemSpan}>#35547357937256235</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>phone:</h1>
          <span className={style.textItemSpan}>
            {agentData?.profile?.phone}
          </span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>email:</h1>
          <span className={`${style.textItemSpan} lowercase pr-10 `}>
            {agentData?.email}
          </span>
        </div>
        <div className={style.social}>
          <div className="flex items-center ">
            <GrFacebookOption
              className="iconsDetailsAgent"
              color=" #3b5998"
              size={25}
              style={{ marginRight: "11px" }}
            />
            <GrLinkedinOption
              className="iconsDetailsAgent"
              color=" #2867B2"
              size={25}
              style={{ marginRight: "11px" }}
            />
            <AiOutlineTwitter
              className=" iconsDetailsAgent"
              color="#00acee"
              size={25}
              style={{ marginRight: "11px" }}
            />{" "}
            <AiOutlineInstagram
              className="instagram iconsDetailsAgent"
              size={25}
              style={{ marginRight: "11px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
