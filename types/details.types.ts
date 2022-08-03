import { ICustomer, IIcon, IImage, ILink, ITechnology } from "./common.types";

export enum ISubDetailsType {
  text = 'text',
  image = 'image',
}

export type ISubDetailsImage = IImage & { subtype: ISubDetailsType.image };

export type ISubDetailsText = { subtype: ISubDetailsType.text, text: string };

export type ISubDetail = ISubDetailsImage | ISubDetailsText;

export type ISubDetails = {
  sub?: ISubDetail[];
};

/////////////

export interface IDetailsCompany {
  company?: {
    description: string;
    links?: ILink[];
    customers?: ICustomer[];
  };
}

export interface IDetailsRole {
  role?: {
    description: string;
    more?: string;
  }
}

export interface IDetailsProducts {
  products?: {
    name: string;
    icon: IIcon;
    description: string;
    longDescription?: string;
    images?: IImage[];
    link?: string;
    technologies?: ITechnology[];
  }[];
}

export interface IDetailsMissions {
  missions?: {
    icon: IIcon;
    description: string;
  }[];
}

export type IDetails = IDetailsCompany & IDetailsRole & IDetailsProducts & IDetailsMissions & ISubDetails;
