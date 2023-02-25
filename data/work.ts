import { faDribbble, faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faArrowsUpDown, faBicycle, faCalculator, faChartArea, faChartLine, faCrosshairs, faDrawPolygon, faExclamationTriangle, faFont, faGlobe, faList, faMapLocationDot, faPlane, faPlaneDeparture, faShapes, faSuitcase, faTruck, faUsers, faUserTag, faWallet, faWarehouse, faWindowMaximize, faWrench } from "@fortawesome/free-solid-svg-icons";
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
      features: [
        {
          title: 'Mechanic / Maintenance',
          icon: faWrench,
          description: 'A full maintenance interface with 500+ available models.'
        },
        {
          title: 'Warehouses',
          icon: faWarehouse,
          description: 'Manage your warehouses and their location.'
        },
        {
          title: 'Roles',
          icon: faUserTag,
          description: 'Multi-role system, with requests for each role and company.'
        },
        {
          title: 'Employees',
          icon: faUsers,
          description: 'Employee Management',
        },
        {
          title: 'Invoices and Analytics',
          icon: faCalculator,
          description: 'Invoice Management, Tracking & Analytics',
        },
        {
          title: 'GPS',
          icon: faCrosshairs,
          description: 'GPS and LogBook',
        },
        {
          title: 'Equipments',
          icon: faTruck,
          description: 'Register your equipments, update their position with a GPS tracker',
        },
        {
          title: 'Jobs',
          icon: faSuitcase,
          description: 'Update your professional profile, publish job offers and candidate',
        },
        {
          title: 'Alerts',
          icon: faExclamationTriangle,
          description: 'Alerts and Notifications, in real-time',
        }
      ],
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
          {
            icon: { source: 'custom', icon: '/technologies/nx-logo' },
            title: 'NX',
          },
        ],
        images: [
          {
            h: 1254,
            w: 998,
            path: '/images/projects/LO/1.png',
          },
          {
            h: 699,
            w: 1242,
            path: '/images/projects/LO/2.jpg',
          },
          {
            h: 979,
            w: 1920,
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
          {
            h: 979,
            w: 1920,
            path: '/images/projects/LO/8.png',
          },
          {
            h: 828,
            w: 1242,
            path: '/images/projects/LO/9.jpg',
          },
          {
            h: 457,
            w: 627,
            path: '/images/projects/LO/10.jpg',
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
    details: {
      project: {
        description: 'Icon library for tech-related editors. With 1,200+ icons, related to technologies, brands and companies, this library can both be used in desktop softwares (Photoshop, Word...) and in website construction.',
        links: [
          {
            title: 'GitHub',
            icon: { source: 'fa', icon: faGithub },
            link: 'https://github.com/bchoubert/bc-font',
          },
          {
            title: 'Website',
            icon: { source: 'fa', icon: faGlobe },
            link: 'https://bchoubert.github.io/bc-font-website/#/',
          },
          {
            title: 'Dribbble',
            icon: { source: 'fa', icon: faDribbble },
            link: 'https://dribbble.com/bchoubert/projects/1948450-BC-Font',
          },
        ],
        technologies: [
          {
            icon: { source: 'custom', icon: '/technologies/nodejs-logo' },
            title: 'NodeJS',
          },
          {
            icon: { source: 'custom', icon: '/technologies/webpack-logo' },
            title: 'Webpack',
          },
          {
            icon: { source: 'custom', icon: '/technologies/react-logo' },
            title: 'React',
          }
        ],
        images: [
          {
            h: 682,
            w: 1211,
            path: '/images/projects/BCF/1.jpg',
          },
          {
            h: 853,
            w: 1279,
            path: '/images/projects/BCF/2.jpg',
          },
          {
            h: 853,
            w: 1280,
            path: '/images/projects/BCF/3.jpg',
          },
          {
            h: 1080,
            w: 1920,
            path: '/images/projects/BCF/4.jpg',
          },
        ]
      },
      features: [
        {
          title: '1268 icons',
          icon: faShapes,
          description: 'Technologies, Products, Brands...'
        },
        {
          title: 'Type, Logo, or Both!',
          icon: faFont,
          description: 'Additional icons for different styles. Type are only texts, Logo are only images, Full contains both the logo and the text'
        },
        {
          title: '27 categories',
          icon: faList,
          description: 'Icons are sorted into 27 categories, including Analytics, Hardware, Recruitment'
        },
        {
          title: 'Website',
          icon: faWindowMaximize,
          description: 'Website to list, filter and view icons'
        }
      ]
    },
  },
  {
    id: 'CV',
    image: '/images/projects/CV/bootstrap.png',
    title: 'Crypto-Viewer',
    shortDescription: 'Mobile app to track your assets',
    icon: { source: 'custom', icon: '/organisms/crypto-viewer-logo' },
    color: '#1543E4',
    light: '#e8ecfd',
    details: {
      project: {
        description: 'Crypto-Viewer is a mobile application to fetch cryptos, get crypto analysis, and manage your assets via a protfolio.',
        links: [
          {
            title: 'GitHub',
            icon: { source: 'fa', icon: faGithub },
            link: 'https://github.com/bchoubert/crypto-viewer',
          },
          {
            title: 'Play Store',
            icon: { source: 'fa', icon: faGooglePlay },
            link: 'https://play.google.com/store/apps/details?id=com.bchoubert.cryptoviewer',
          },
          {
            title: 'Dribbble',
            icon: { source: 'fa', icon: faDribbble },
            link: 'https://dribbble.com/bchoubert/projects/1948460-Crypto-Viewer-App',
          },
        ],
        technologies: [
          {
            icon: { source: 'custom', icon: '/technologies/react-logo' },
            title: 'React Native',
          },
          {
            icon: { source: 'custom', icon: '/technologies/expo-logo' },
            title: 'Expo',
          },
          {
            icon: { source: 'custom', icon: '/technologies/typescript-logo' },
            title: 'Typescript',
          }
        ],
        images: [
          {
            h: 853,
            w: 1280,
            path: '/images/projects/CV/1.jpg',
          },
          {
            h: 853,
            w: 1280,
            path: '/images/projects/CV/2.jpg',
          },
          {
            h: 1080,
            w: 1920,
            path: '/images/projects/CV/3.jpg',
          }
        ]
      },
      features: [
        {
          title: 'Fetch prices',
          icon: faArrowsUpDown,
          description: 'For each crypto, fetch current buy and sell prices, as well as volume and high and low values'
        },
        {
          title: 'Fetch historical values',
          icon: faChartLine,
          description: 'See historical values, for one day, one week, one month, or one year frequency'
        },
        {
          title: 'Add to your wallet',
          icon: faWallet,
          description: 'Once added to your wallet, follow your total and each crypto statistics'
        }
      ],
    },
  },
  {
    id: 'ZB',
    image: '/images/projects/ZB/bootstrap.png',
    title: 'Zest Bank',
    shortDescription: 'Banking mobile app concept',
    icon: { source: 'custom', icon: '/organisms/zestbank-logo' },
    color: '#F87C28',
    light: '#fef0e6',
    details: {
      project: {
        description: 'Zest Bank is a fresh bank concept brand.',
        links: [
          {
            title: 'Dribbble',
            icon: { source: 'fa', icon: faDribbble },
            link: 'https://dribbble.com/bchoubert/projects/1923106-Zest-Bank-Concept',
          },
        ],
        technologies: [
          {
            icon: { source: 'custom', icon: '/technologies/xd-logo' },
            title: 'Adobe Xd',
          },
        ],
        images: [
          {
            h: 3346,
            w: 1776,
            path: '/images/projects/ZB/1.png',
          },
          {
            h: 661,
            w: 881,
            path: '/images/projects/ZB/2.png',
          },
          {
            h: 661,
            w: 881,
            path: '/images/projects/ZB/3.png',
          },
          {
            h: 589,
            w: 884,
            path: '/images/projects/ZB/4.png',
          },
          {
            h: 589,
            w: 884,
            path: '/images/projects/ZB/5.png',
          },
          {
            h: 661,
            w: 881,
            path: '/images/projects/ZB/6.png',
          },
          {
            h: 1080,
            w: 1920,
            path: '/images/projects/ZB/7.jpg',
          },
        ]
      },
    }
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
      project: {
        description: 'This website is both the presentation of a BI project, related to the bike-sharing service analysis, and a real-time status of the network.',
        links: [
          {
            title: 'GitHub',
            icon: { source: 'fa', icon: faGithub },
            link: 'https://github.com/bchoubert/bi-velov',
          },
          {
            title: 'Website',
            icon: { source: 'fa', icon: faGlobe },
            link: 'https://bchoubert.github.io/bi-velov/',
          },
          {
            title: 'Dribbble',
            icon: { source: 'fa', icon: faDribbble },
            link: 'https://dribbble.com/bchoubert/projects/1984459-Velo-v-Business-Intelligence',
          },
        ],
        technologies: [
          {
            icon: { source: 'custom', icon: '/technologies/jquery-logo'},
            title: 'jQuery'
          },
          {
            icon: { source: 'custom', icon: '/technologies/chartjs-logo'},
            title: 'ChartJS'
          },
          {
            icon: { source: 'custom', icon: '/technologies/talend-logo'},
            title: 'Talend ETL'
          },
          {
            icon: { source: 'custom', icon: '/technologies/leaflet-logo'},
            title: 'Leaflet'
          },
          {
            icon: { source: 'custom', icon: '/technologies/qliksense-logo'},
            title: 'Qlik Sense'
          }
        ],
        images: [
          {
            h: 1080,
            w: 1920,
            path: '/images/projects/VV/1.png',
          },
          {
            h: 960,
            w: 1280,
            path: '/images/projects/VV/2.jpg',
          },
          {
            h: 853,
            w: 1280,
            path: '/images/projects/VV/3.jpg',
          },
          {
            h: 853,
            w: 1280,
            path: '/images/projects/VV/4.jpg',
          },
          {
            h: 1281,
            w: 1920,
            path: '/images/projects/VV/5.jpg',
          },
          {
            h: 539,
            w: 1686,
            path: '/images/projects/VV/6.png',
          },
          {
            h: 358,
            w: 145,
            path: '/images/projects/VV/7.png',
          },
          {
            h: 979,
            w: 1920,
            path: '/images/projects/VV/8.png',
          },
          {
            h: 979,
            w: 1920,
            path: '/images/projects/VV/9.png',
          },
          {
            h: 979,
            w: 1920,
            path: '/images/projects/VV/10.png',
          },
          {
            h: 1150,
            w: 1376,
            path: '/images/projects/VV/11.png',
          },
        ]
      },
      features: [
        {
          title: 'Real-time station status',
          icon: faBicycle,
          description: 'See in real-time how many bikes and places are available, as well as station failures',
        },
        {
          title: 'Real-time district statistics',
          icon: faDrawPolygon,
          description: 'Check how the district\'s stations are compared to other districts, with number of stations and bikes per habitant',
        },
        {
          title: 'Past analysis',
          icon: faChartArea,
          description: 'See how the network behaves during a month-long analysis with 5-min frequency, compared to availability, weather...'
        }
      ]
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
    details: {
      project: {
        description: 'Air-Data presents all airlines in the world, with their registered routes.',
        links: [
          {
            title: 'Website',
            icon: { source: 'fa', icon: faGlobe },
            link: 'https://k044n51lk5.csb.app/',
          },
          {
            title: 'Dribbble',
            icon: { source: 'fa', icon: faDribbble },
            link: 'https://dribbble.com/bchoubert/projects/2015636-Air-Data',
          },
        ],
        technologies: [
          {
            icon: { source: 'custom', icon: '/technologies/firebase-logo'},
            title: 'Firebase Real-Time database'
          },
          {
            icon: { source: 'custom', icon: '/technologies/vuejs-logo'},
            title: 'Vue'
          },
          {
            icon: { source: 'custom', icon: '/technologies/leaflet-logo'},
            title: 'Leaflet'
          },
          {
            icon: { source: 'custom', icon: '/technologies/qgis-logo'},
            title: 'QGis'
          },
        ],
        images: [
          {
            h: 1448,
            w: 1948,
            path: '/images/projects/AD/1.png',
          },
          {
            h: 1140,
            w: 540,
            path: '/images/projects/AD/2.png',
          },
          {
            h: 853,
            w: 1280,
            path: '/images/projects/AD/3.jpg',
          },
          {
            h: 960,
            w: 1861,
            path: '/images/projects/AD/4.png',
          },
          {
            h: 1080,
            w: 1920,
            path: '/images/projects/AD/5.jpg',
          },
        ]
      },
      features: [
        {
          title: 'List airlines',
          icon: faPlane,
          description: 'Fetch all airlines all around the world'
        },
        {
          title: 'Check routes',
          icon: faMapLocationDot,
          description: 'See all routes that the airline operates'
        },
        {
          title: 'Explore airports',
          icon: faPlaneDeparture,
          description: 'With a custom-built layer, explore all airports in the world'
        }
      ]
    },
  },
];

export default work;
