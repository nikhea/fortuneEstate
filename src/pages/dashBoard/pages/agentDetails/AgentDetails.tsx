import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PageLoading from "../../../../components/UI/Loading/PageLoading";
import {
  getSingelProperties,
  getSingleAgent,
} from "../../../../services/api/shared";
import { queryKeys } from "../../../../utils/queryKey";
import AgentInfo from "./components/AgentInfo";
import AgentSingleDetails from "./components/AgentSingleDetails";

const style = {
  container: `w-[95%] m-auto my-[2rem] overflow-hidden text-[#11142D]`,
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem] capitalize`,
  subContainer: ``,
  dividerOneColumn: `grid gap-4 grid-cols-1 my-[2rem]`,
  dividerTwoColumn: `grid gap-4 grid-cols-12 my-[2rem]`,
  dividerThreeColumn: `grid gap-4 grid-cols-1 lg:grid-cols-3 `,
};
const AgentDetails = () => {
  const { AgentId } = useParams();
  const { data: agentData, isLoading } = useQuery(
    [queryKeys.agents, AgentId],
    () => getSingleAgent(AgentId)
  );
  if (!agentData?.data) return <PageLoading />;

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.h1}>agents Details</h1>
      </div>
      <div className={style.dividerTwoColumn}>
        <span className=" col-span-full lg:col-start-1 lg:col-end-5 ">
          <AgentInfo agentData={agentData?.data} />
        </span>
        <span className=" col-span-full lg:col-start-5 lg:col-end-13">
          <AgentSingleDetails />
        </span>
      </div>
      <div className={style.dividerOneColumn}>
        {/* <AgentSingleDetails /> */}
      </div>
    </div>
  );
};
// lg:col-start-9 lg:col-end-13 lg:col-start-1 lg:col-end-9
export default AgentDetails;
