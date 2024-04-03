import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

import {
  ICustomer, IIcon, IImage, ILink, ITechnology,
} from './common.types';

export enum ISubDetailsType {
  text = 'text',
  image = 'image',
}

export type ISubDetailsImage = IImage & { subtype: ISubDetailsType.image };

export type ISubDetailsText = { subtype: ISubDetailsType.text, text: string };

export type ISubDetail = ISubDetailsImage | ISubDetailsText;

export type ISubDetails = {
  sub?: ISubDetail[];
  illustration?: IImage;
};

/// //////////

export interface IDetailsCompany {
  company?: {
    isOrganization?: boolean;
    description: string;
    accomplishments?: string[];
    links?: ILink[];
    customers?: ICustomer[];
  };
}

export interface IDetailsProject {
  project?: {
    description: string;
    accomplishments?: string[];
    links?: ILink[];
    technologies?: ITechnology[];
    images?: IImage[];
  };
}

export interface IDetailsRoleRealisationOrFeature {
  title: string;
  icon: IconDefinition;
  description: string;
}

export interface IDetailsRole {
  role?: {
    description: string;
    more?: string;
  }
  realisations?: IDetailsRoleRealisationOrFeature[];
  features?: IDetailsRoleRealisationOrFeature[];
}

export interface IDetailsProducts {
  products?: {
    name: string;
    icon?: IIcon;
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

export type IDetails = IDetailsCompany
& IDetailsProject & IDetailsRole & IDetailsProducts & IDetailsMissions & ISubDetails;
