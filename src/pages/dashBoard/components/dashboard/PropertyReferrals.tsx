import { propertyReferralsInfo } from "./config/ProgessBar";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
interface ProgressBarProps {
  index: number;
  title: string;
  percentage: number;
  color: string;
}

const style = {
  container: ` bg-white shadow-lg  rounded-md p-4 h-full`,
  progress: `flex gap-3 my-20 flex-col h-full`,
};
const PropertyReferrals = () => {
  return (
    <div className={style.container}>
      <h1 className="text-[25px] font-[400]  text-[#11142d]">
        Properties Referrals
      </h1>
      <div className={style.progress}>
        {propertyReferralsInfo.map((bar, index) => (
          <ProgressBar key={bar.title} {...bar} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PropertyReferrals;

const ProgressBar = ({ title, percentage, color, index }: ProgressBarProps) => (
  <div className="w-full">
    <div className="flex items-center justify-between">
      <h1 className="text-[16px] font-medium text-[#11142d]">{title}</h1>
      <h1 className="text-[16px] font-medium text-[#11142d]">{percentage}%</h1>
    </div>
    <div className="mt-2 relative w-full h-[8px] rounded-md bg-[#e4e8ef]">
      <Tippy content={`${percentage}%`}>
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${percentage}%`,
          }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="h-full absolute rounded-md"
          style={{
            // width: `${percentage}%`,
            backgroundColor: `${color}`,
          }}
        />
      </Tippy>
    </div>
  </div>
);
