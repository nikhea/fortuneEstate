import React, { FC } from "react";
import AgentCard from "./AgentCard";
import { IAgent, IAgentProps } from "../../interfaces/Agent";
import { Link } from "react-router-dom";

const style = {
  container: `bg-white shadow-lg rounded-md p-4 h-full w-full flex flex-col  h-full   md:justify-between`,
  title: `text-[25px] font-[400 text-[#11142d] capitalize`,
  mainFlex: `my-10 flex gap-4 flex-wrap`,
  SubmainFlex: `flex gap-1 flex-wrap items-center`,
  link: ` capitalize p-1 px-3 border border-[3px] rounded-md text-[18px] text-gray-400`,
};
const Agent: FC<IAgentProps> = ({ AgentData }) => {
  const displayAgent = AgentData.map((agent: IAgent) => (
    <div key={agent._id}>
      <AgentCard
        ID={agent._id}
        image={agent.image}
        email={agent.email}
        firstname={agent.firstname}
        lastname={agent.lastname}
        username={agent.username}
        role={agent.role}
      />
    </div>
  ));
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className={style.title}>top Agents</h1>
        <Link to="#" className={style.link}>
          view all
        </Link>
      </div>
      {displayAgent}
    </div>
  );
};

export default Agent;
