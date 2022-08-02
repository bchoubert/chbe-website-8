import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

// PARTS
export type IIcon = {
  source: 'fa' | 'custom';
  icon: IconDefinition | string;
};

interface IIconWithTitle {
  icon?: IIcon;
  title: string;
}

export interface ILink extends IIconWithTitle {
  link: string;
}

export interface IImage {
  path: string;
  h: number;
  w: number;
  portrait?: boolean;
}

export interface IDateSpan {
  start: string;
  end: string;
  yEnd: string;
}

export interface ITechnology extends IIconWithTitle { }
export interface ICustomer extends ILink { }

// BUSINESS
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

// SUB DETAILS
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

// DETAILS
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


// COMMON
export interface ISection {
  icon: IIcon;
  title: string;
  caption: string;
  content: ReactNode;
}
