import { TailSpin } from "react-loader-spinner";

const index = () => {
  let color = "#06c4e5";
  return (
    <div className="h-screen flex justify-center items-center ">
      <TailSpin
        height="100"
        width="180"
        color={color}
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="text-gradient-to-r from-cyan-500 to-blue-500"
        visible={true}
      />
    </div>
  );
};

export default index;
