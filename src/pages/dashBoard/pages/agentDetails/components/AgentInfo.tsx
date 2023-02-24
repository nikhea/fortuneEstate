import "./style/agentInfo.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";

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

const AgentInfo = () => {
  return (
    <div className={style.container}>
      <div
        className={style.imgContainer}
        style={{
          backgroundImage: `url(${urlImg})`,
        }}
      >
        <div className={style.profileImg}>
          <LazyLoadImage className={style.thumbnailImage} src={urlImg} />
        </div>
        <div className="absolute -bottom-[55px] left-32 capitalize">
          <h1>fortune imonikhea</h1>
          <span className=" text-gray-500">agent</span>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>agent:</h1>
          <span className={style.textItemSpan}>26</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>city:</h1>
          <span className={style.textItemSpan}>new york city</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>state:</h1>
          <span className={style.textItemSpan}>new york</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>country:</h1>
          <span className={style.textItemSpan}>usa</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>post code:</h1>
          <span className={style.textItemSpan}>1001</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>agent ID:</h1>
          <span className={style.textItemSpan}>#35547357937256235</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>phone:</h1>
          <span className={style.textItemSpan}>+234 081 032 447 68</span>
        </div>
        <div className={style.textItem}>
          <h1 className={style.textItemH1}>email:</h1>
          <span className={`${style.textItemSpan} lowercase pr-10 `}>
            imonikheaugbodaga@gamil.com
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
