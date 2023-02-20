import { faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { IWork } from "types/business.types";

const work: IWork[] = [
  {
    id: 'LO',
    image: '/images/projects/LO/bootstrap.png',
    title: 'LogTrack',
    shortDescription: 'Saas Transportation ERP',
    icon: { source: 'custom', icon: '/organisms/logtrack-logo' },
    color: '#113885',
    light: '#e7eefc',
    details: {
      illustration: {
        h: 536,
        w: 536,
        path: '/images/projects/LO/illustration.jpg'
      },
      project: {
        description: `Your everyday logistics partner. LogTrack is an ERP and provides a set of pioneering functionalities for all related workers:<br/>${''
          } Driver, Manager, Dispatcher, Insurer, Accountant, Mechanic...<br/>${''
          } Built with the most modern technologies, LogTrack is a powerful, versatile and user-centered product.`,
        links: [
          {
            title: 'GitHub',
            icon: { source: 'fa', icon: faGithub },
            link: 'https://github.com/bchoubert/logistics',
          },
          {
            title: 'Website',
            icon: { source: 'fa', icon: faGlobe },
            link: 'https://logtrack.app/',
          },
          {
            title: 'Dribbble',
            icon: { source: 'fa', icon: faDribbble },
            link: 'https://dribbble.com/bchoubert/projects/2016530-LogTrack',
          },
        ],
        technologies: [
          {
            icon: { source: 'custom', icon: '/technologies/nodejs-logo' },
            title: 'NodeJS NestJS',
          },
          {
            icon: { source: 'custom', icon: '/technologies/react-logo' },
            title: 'React',
          },
          {
            icon: { source: 'custom', icon: '/technologies/openlayers-logo' },
            title: 'OpenLayers',
          },
          {
            icon: { source: 'custom', icon: '/technologies/sass-logo' },
            title: 'Sass',
          },
          {
            icon: { source: 'custom', icon: '/technologies/firebase-logo' },
            title: 'Firebase Cloud',
          },
        ],
        images: [
          {
            h: 1254,
            w: 998,
            path: '/images/projects/LO/1.png',
          },
          {
            h: 979,
            w: 1920,
            path: '/images/projects/LO/2.png',
          },
          {
            h: 1920,
            w: 979,
            path: '/images/projects/LO/3.png',
          },
          {
            h: 2475,
            w: 3300,
            path: '/images/projects/LO/4.png',
          },
          {
            h: 2475,
            w: 3300,
            path: '/images/projects/LO/5.png',
          },
          {
            h: 979,
            w: 1920,
            path: '/images/projects/LO/6.png',
          },
          {
            h: 1281,
            w: 1920,
            path: '/images/projects/LO/7.jpg',
          },
        ]
      }
    },
  },
  {
    id: 'BCF',
    image: '/images/projects/BCF/bootstrap.png',
    title: 'BC-Font',
    shortDescription: 'The Developer Font with 1,200+ icons',
    icon: { source: 'custom', icon: '/organisms/bcfont-logo' },
    color: '#EB2834',
    light: '#fcdbdd',
    details: {},
  },
  {
    id: 'CV',
    image: '/images/projects/CV/bootstrap.png',
    title: 'Crypto-Viewer',
    shortDescription: 'Mobile app to track your assets',
    icon: { source: 'custom', icon: '/organisms/crypto-viewer-logo' },
    color: '#1543E4',
    light: '#e8ecfd',
    details: {},
  },
  {
    id: 'ZB',
    image: '/images/projects/ZB/bootstrap.png',
    title: 'Zest Bank',
    shortDescription: 'Banking mobile app concept',
    icon: { source: 'custom', icon: '/organisms/zestbank-logo' },
    color: '#F87C28',
    light: '#fef0e6',
    details: {}
  },
  {
    id: 'VV',
    image: '/images/projects/VV/bootstrap.png',
    title: 'Velo\'V',
    shortDescription: 'BI over bike-share service',
    icon: { source: 'custom', icon: '/organisms/velov-logo' },
    color: '#BF1418',
    light: '#fde9e9',
    details: {
      illustration: {
        h: 768,
        w: 768,
        path: '/images/projects/VV/illustration.jpg'
      },
    },
  },
  {
    id: 'AD',
    image: '/images/projects/AD/bootstrap.png',
    title: 'Air Data',
    shortDescription: 'Airlines data viewer',
    icon: { source: 'custom', icon: '/organisms/air-data-logo' },
    color: '#FF4525',
    light: '#ffece9',
    details: {},
  },
];

export default work;
