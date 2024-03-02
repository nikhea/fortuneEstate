import { ThreeCircles } from "react-loader-spinner";

const index = () => {
  let color = "#0D304A";
  return (
    <div className="h-screen flex justify-center items-center ">
      <ThreeCircles
        visible={true}
        height="80"
        width="80"
        color={color}
        ariaLabel="Three-circles-loading"
      />
    </div>
  );
};

export default index;
{
  /* <TailSpin
height="100"
width="180"
color={color}
ariaLabel="tail-spin-loading"
radius="1"
wrapperStyle={{}}
wrapperClass="text-gradient-to-r from-cyan-500 to-blue-500"
visible={true}
/> */
}
