export interface IAgent {
  [x: string]: any;
  ID?: string;
  image: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  profile: IProfile;
}
export interface IProfile {
  age?: string;
  state?: string;
  city?: string;
  country?: string;
  phone?: string;
  postcode?: string;
  profileImage: IProfileImage;
}
export interface IProfileImage {
  url: string;
  secure_url: string;
  thumbnail_url: string;
}
export interface IAgentDetail {
  agentData: IAgent;
}
export interface IAgentProps {
  AgentData: IAgent[];
}
