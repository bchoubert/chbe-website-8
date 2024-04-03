import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

export type IIcon = {
  source: 'fa' | 'custom' | 'component';
  icon: IconDefinition | string;
  iconColor?: string;
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

export interface ISection {
  icon: IIcon;
  title: string;
  caption: string;
  content: ReactNode;
  moreLink?: string;
}
