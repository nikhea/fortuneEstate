export interface IAgent {
  [x: string]: any;
  ID: string;
  image: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
}
export interface IAgentData {
  _id: string;
  image: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  AgentData: [IAgentData];
}
