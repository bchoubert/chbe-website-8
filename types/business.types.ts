import { IDetails, IIcon } from "./common.types";

export interface IBusinessCommon {
  id: string;
  title: string;
  color: string;
  light: string;
  icon: IIcon;
  image: string;
  details: IDetails;
}

export interface IExperience extends IBusinessCommon {
  company: string;
}

export interface IWork extends IBusinessCommon {
  shortDescription: string;
}

export interface INetwork {
  id: string;
  color: string;
  icon: IIcon;
  name: string;
  link: string;
  newTab: boolean;
}

export interface IProfile {
  title: string;
  headline: string;
}

export interface EDetailsPart {
  details: IDetails;
  common: IBusinessCommon;
}