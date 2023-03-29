import { FC } from "react";
import { IAgent } from "../../interfaces/Agent";
import AgentImage from "./img/agentImage.png";
import { BsThreeDotsVertical } from "react-icons/bs";
const style = {
  // border border-t-0 border-x-0
  container: ` p-1  flex h-full justify-between w-full items-center text-[#808191] capitalize mb-5 lg:mb-1`,
  title: `text-[18px] font-[600] text-[#11142d]`,
  mainFlex: `my-10 flex gap-4 flex-wrap`,
  SubmainFlex: `flex gap-1 flex-wrap items-center`,
  Imgcontainer: `w-[60px] h-[60px] rounded-full`,
  image: `w-full h-full rounded-full object-cover`,
  textcontainer: `text-[15px] font-[300] text-[#11142d] mx-3 `,
  subTitile: `capitalize text-[15px] text-gray-400`,
};
const AgentCard: FC<IAgent> = ({
  ID,
  image,
  email,
  firstname,
  lastname,
  username,
  role,
}) => {
  return (
    <div className={style.container}>
      <div className={style.SubmainFlex}>
        <div className={style.Imgcontainer}>
          <img src={image} alt={firstname} className={style.image} />
        </div>
        <div className={style.textcontainer}>
          <h1 className={style.title}>
            {firstname}{" "}
            <span>
              {" "}
              {lastname.length <= 5
                ? lastname
                : `${lastname.substring(0, 5)}...`}
            </span>
          </h1>
          <h2 className={style.subTitile}>top agent</h2>
        </div>
      </div>
      <BsThreeDotsVertical size={20} color="#808191" />
    </div>
  );
};
{
}
export default AgentCard;
//
//
//
//     </div>
//     <p className="lowercase">{email}</p>
