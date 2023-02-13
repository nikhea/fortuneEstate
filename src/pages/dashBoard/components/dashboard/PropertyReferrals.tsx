import { propertyReferralsInfo } from "./config/ProgessBar";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const style = {
  container: ` bg-white shadow-lg  rounded-md p-4 `,
  progress: `flex gap-4 my-20 flex-col h-full`,
};
const PropertyReferrals = () => {
  return (
    <div className={style.container}>
      <h1 className="text-[25px] font-[400]  text-[#11142d]">
        Property Referrals
      </h1>
      <div className={style.progress}>
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </div>
    </div>
  );
};

export default PropertyReferrals;

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <div className="w-full">
    <div className="flex items-center justify-between">
      <h1 className="text-[16px] font-medium text-[#11142d]">{title}</h1>
      <h1 className="text-[16px] font-medium text-[#11142d]">{percentage}%</h1>
    </div>
    <div className="mt-2 relative w-full h-[8px] rounded-md bg-[#e4e8ef]">
      <div
        className="h-full absolute rounded-md"
        style={{
          width: `${percentage}%`,
          backgroundColor: `${color}`,
        }}
      />
    </div>
  </div>
);
