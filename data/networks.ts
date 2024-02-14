import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { INetwork } from 'types/business.types';

const networks: INetwork[] = [
  {
    id: 'LinkedIn',
    color: '#0077B5',
    icon: { source: 'custom', icon: '/networks/linkedin-logo-alt' },
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bchoubert/',
    newTab: true,
  },
  {
    id: 'GitHub',
    color: '#7B7E81',
    icon: { source: 'custom', icon: '/networks/github-logo' },
    name: 'GitHub',
    link: 'https://github.com/bchoubert',
    newTab: true,
  },
  {
    id: 'Dribbble',
    color: '#E44A86',
    icon: { source: 'custom', icon: '/networks/dribbble-logo' },
    name: 'Dribbble',
    link: 'http://bchoubert.dribbble.com/',
    newTab: true,
  },
  {
    id: 'Email',
    color: '#777777',
    icon: { source: 'fa', icon: faEnvelope },
    name: 'Email',
    link: 'mailto:bertrand.choubert@hotmail.fr',
    newTab: false,
  },
];

export default networks;
