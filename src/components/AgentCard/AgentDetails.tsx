import React, { FC } from "react";
import AgentCard from "./AgentCard";
import { IAgent, IAgentProps } from "../../interfaces/Agent";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllAgents } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";

const style = {
  container: `bg-white shadow-lg rounded-md p-4 h-full w-full flex flex-col  h-full   md:justify-between`,
  title: `text-[25px] font-[400 text-[#11142d] capitalize`,
  mainFlex: `my-10 flex gap-4 flex-wrap`,
  SubmainFlex: `flex gap-1 flex-wrap items-center`,
  link: ` capitalize p-1 px-3 border border-[3px] rounded-md text-[18px] text-gray-400`,
};
const Agent: FC<IAgentProps> = ({}) => {
  const { data: AgentData, isLoading } = useQuery(
    [queryKeys.agents],
    () => getAllAgents(),
    {
      keepPreviousData: true,
    }
  );
  const displayAgent = AgentData?.data?.slice(0, 4).map((agent: IAgent) => (
    <div key={agent._id}>
      <AgentCard
        ID={agent._id}
        image={agent.profile?.profileImage?.secure_url}
        email={agent.email}
        firstname={agent.firstname}
        lastname={agent.lastname}
        username={agent.username}
        role={agent.role}
        profile={agent.profile}
      />
    </div>
  ));
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className={style.title}>top Agents</h1>
        <Link to="/dashboardagents" className={style.link}>
          view all
        </Link>
      </div>
      {displayAgent}
    </div>
  );
};

export default Agent;
