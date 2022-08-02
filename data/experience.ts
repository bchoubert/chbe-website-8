import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { IExperience } from 'types';

const experience: IExperience[] = [
  {
    id: 'AM',
    title: 'Web Developer & UI Reviewer',
    company: 'Amalia',
    icon: { source: 'custom', icon: '/organisms/amalia-logo' },
    image: '/images/companies/AM/brand.png',
    color: '#FFD859',
    light: '#fff8e2',
    details: {
      company: {
        description: `<b>Amalia</b> is on a mission to inspire, enable, and reward <b>peak business performance</b>.${''
          }It helps companies simplify compensation management.<br/><br/>Amalia was listed as in the <b>best 20 startups in Europe in 2022</b>.`,
        links: [
          {
            title: 'Website',
            icon: { source: 'fa', icon: faExternalLinkAlt },
            link: 'https://www.amalia.io/',
          },
          {
            title: 'LinkedIn',
            icon: { source: 'fa', icon: faLinkedinIn },
            link: 'https://www.linkedin.com/company/amalia-io-fr/',
          },
        ],
        customers: [
          {
            title: 'Mirakl',
            icon: { source: 'custom', icon: '/organisms/mirakl-logo' },
            link: 'https://www.mirakl.com/'
          },
          {
            title: 'Swile',
            icon: { source: 'custom', icon: '/organisms/swile-logo' },
            link: 'https://www.swile.co/en'
          },
          {
            title: 'OpenClassrooms',
            icon: { source: 'custom', icon: '/organisms/openclassrooms-logo' },
            link: 'https://openclassrooms.com/en/'
          },
          {
            title: 'Yousign',
            icon: { source: 'custom', icon: '/organisms/yousign-logo' },
            link: 'https://yousign.com/'
          },
          {
            title: 'Getronics',
            icon: { source: 'custom', icon: '/organisms/getronics-logo' },
            link: 'https://www.getronics.com/'
          },
          {
            title: 'SudOuest',
            link: 'https://www.sudouest.fr/'
          }
        ]
      },
      role: {
        description: `As a <b>Web Developer</b> & <b>UI Reviewer</b>, I was in charge of new feature development, participated in UI/UX reviews,${''
          } designed complex technical solutions and mockups.<br/><br/>I was also missioned to be the <b>Tests Referral</b>, ${''
          } I increased code quality by providing standards and new test solutions. and animated workshops around new testing technologies.`,
      },
      products: [
        {
          name: 'Amalia.io',
          icon: { source: 'custom', icon: '/organisms/amalia-logo' },
          description: 'Real-time sales performance management Saas solution',
          longDescription: `Sales Representatives have a variable salary (<b>compensation</b>) depending on how many new contracts they permitted to sign for their company.${''
            } It depends on the contract type, if it\'s a new contract or a renewal, upsell... Nowadays, companies must build their compensation plan to be <b>very attractive</b>,${''
            } to encourage a better productivity, but must be aware to <b>limit their expenses</b> on these plans. ${''
            }This problematic causes compensation plans to be <b>more and more complex</b>, implementing rampups, accelerators, adjustments, hold & release, KPIs, on-Target earning...<br/><br/>${''
            }Amalia provides solutions to <b>design and analyze compensation plans</b>, and tools to manage data sources, overwrites, employee directory, goals, KPIs, comments, validation workflows...`,
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/nodejs-logo' },
              title: 'NodeJS NestJS',
            },
            {
              icon: { source: 'custom', icon: '/technologies/react-logo' },
              title: 'React + Redux',
            },
            {
              icon: { source: 'custom', icon: '/technologies/d3-logo' },
              title: 'D3.js',
            },
            {
              icon: { source: 'custom', icon: '/technologies/testing-library-logo' },
              title: 'Testing Library',
            },
            {
              icon: { source: 'custom', icon: '/technologies/mathjs-full' },
              title: 'MathJS',
            },
          ],
          images: [
            {
              h: 800,
              w: 1200,
              path: '/images/companies/AM/am_1.png',
            },
            {
              h: 630,
              w: 500,
              path: '/images/companies/AM/am_2.png',
            },
            {
              h: 390,
              w: 711,
              path: '/images/companies/AM/am_3.png',
            },
            {
              h: 634,
              w: 1128,
              path: '/images/companies/AM/am_4.png',
            },
            {
              h: 777,
              w: 1593,
              path: '/images/companies/AM/am_5.png',
            },
            {
              h: 938,
              w: 1810,
              path: '/images/companies/AM/am_6.png',
            },
            {
              h: 1202,
              w: 1830,
              path: '/images/companies/AM/am_7.png',
            },
            {
              h: 756,
              w: 981,
              path: '/images/companies/AM/am_8.png',
            },
            {
              h: 1002,
              w: 1508,
              path: '/images/companies/AM/am_9.png',
            },
            {
              h: 813,
              w: 1507,
              path: '/images/companies/AM/am_10.png',
            },
            {
              h: 321,
              w: 448,
              path: '/images/companies/AM/am_11.png',
            },
          ],
          link: 'https://www.amalia.io/',
        }
      ],
    },
  },
  {
    id: 'SK',
    title: 'Web Developer & UI Designer',
    company: 'Sogelink',
    icon: { source: 'custom', icon: '/organisms/sogelink-logo' },
    image: '/images/companies/SK/brand.jpg',
    color: '#0062AE',
    light: '#e9f5ff',
    details: {
      company: {
        description: '<b>Sogelink</b> supports all players in the <b>infrastructure and construction</b> ecosystem with <b>software, cloud and mobile solutions</b>.',
        links: [
          {
            title: 'Website',
            icon: { source: 'fa', icon: faExternalLinkAlt },
            link: 'https://www.sogelink.fr/',
          },
          {
            title: 'LinkedIn',
            icon: { source: 'fa', icon: faLinkedinIn },
            link: 'https://www.linkedin.com/company/groupe-sogelink/',
          },
        ],
        customers: [
          {
            title: 'Colas',
            icon: { source: 'custom', icon: '/organisms/colas-logo' },
            link: 'https://www.colas.com/en'
          },
          {
            title: 'Bouygues',
            icon: { source: 'custom', icon: '/organisms/bouygues-logo' },
            link: 'https://www.bouygues-es.com/'
          },
          {
            title: 'Eiffage',
            icon: { source: 'custom', icon: '/organisms/eiffage-logo' },
            link: 'https://www.eiffage.com/'
          },
          {
            title: 'Vinci',
            icon: { source: 'custom', icon: '/organisms/vinci-logo' },
            link: 'https://www.vinci.com/',
          },
          {
            title: 'SNCF',
            icon: { source: 'custom', icon: '/organisms/sncf-logo' },
            link: 'https://www.sncf.com/en'
          },
          {
            title: 'Métropole de Lille',
            icon: { source: 'custom', icon: '/organisms/lille-logo' },
            link: 'https://www.lillemetropole.fr/',
          },
          {
            title: 'Métropole de Toulouse',
            icon: { source: 'custom', icon: '/organisms/toulouse-logo' },
            link: 'https://www.toulouse-metropole.fr/',
          }
        ]
      },
      role: {
        description: 'As a <b>UI Designer</b> & <b>R&D Full-Stack Web Developer</b>, I designed and developed may components and webpages, as well as developed POC related to 2D and 3D on the web.',
      },
      products: [
        {
          name: 'Maplink',
          icon: { source: 'custom', icon: '/projects/maplink-logo-alt' },
          description: 'Maplink is both a map component integrated into DICT.fr and a Network and Urban Properties Management Solution',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/java-logo' },
              title: 'Java',
            },
            {
              icon: { source: 'custom', icon: '/technologies/spring-logo' },
              title: 'Spring',
            },
            {
              icon: { source: 'custom', icon: '/technologies/angular-logo' },
              title: 'Angular',
            },
          ],
          images: [
            {
              h: 520,
              w: 1200,
              path: '/images/companies/SK/ml_1.jpeg',
            },
            {
              h: 1068,
              w: 1600,
              path: '/images/companies/SK/ML_2.jpeg',
            },
          ],
          link: 'https://www.sogelink.com/maplink',
        },
        {
          name: 'Geosnap',
          icon: { source: 'custom', icon: '/projects/geosnap-logo' },
          description: 'Surveyor / Topography Saas Solution : compute your topographic projects in the cloud',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/java-logo' },
              title: 'Java',
            },
            {
              icon: { source: 'custom', icon: '/technologies/spring-logo' },
              title: 'Spring',
            },
            {
              icon: { source: 'custom', icon: '/technologies/angular-logo' },
              title: 'Angular',
            },
            {
              icon: { source: 'custom', icon: '/technologies/python-logo' },
              title: 'Python',
            },
          ],
          images: [
            {
              h: 800,
              w: 1200,
              path: '/images/companies/SK/gs_1.jpg',
            },
            {
              h: 520,
              w: 1200,
              path: '/images/companies/SK/gs_2.jpg',
            },
            {
              h: 1267,
              w: 2048,
              path: '/images/companies/SK/gs_3.jpeg',
            },
          ],
          link: 'https://www.sogelink.fr/geosnap',
        },
      ],
    },
  },
  {
    id: 'MC',
    title: 'Full-Stack Web Developer',
    company: 'Maincare Solutions',
    icon: { source: 'custom', icon: '/organisms/maincare-logo-alt' },
    image: '/images/companies/MC/brand.png',
    color: '#E20281',
    light: '#ffe4f3',
    details: {
      company: {
        description: '<b>Maicare Solutions</b> is a <b>health software creator company</b> that brings innovative solutions to hospitals and health professionals.',
        links: [
          {
            title: 'Website',
            icon: { source: 'fa', icon: faExternalLinkAlt },
            link: 'https://www.maincare.com/',
          },
          {
            title: 'LinkedIn',
            icon: { source: 'fa', icon: faLinkedinIn },
            link: 'https://www.linkedin.com/company/maincare/',
          },
        ],
        customers: [
          {
            title: '80% of French hospitals',
            link: 'https://www.maincare.com/qui-sommes-nous/le-groupe-maincare-10-23.html'
          }
        ]
      },
      role: {
        description: 'I was a <b>Web Developer</b>, my goals were to develop a new prescription tool for general practitioners and maintain existing modules of the app.',
      },
      products: [
        {
          name: 'IdeoMed / IdeoSanté',
          icon: { source: 'custom', icon: '/projects/ideomed-logo' },
          description: 'Complex Sass Health platform that focuses on prescriptions and patient journey',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/java-logo' },
              title: 'Java EE',
            },
            {
              icon: { source: 'custom', icon: '/technologies/backbone-logo' },
              title: 'Backbone JS',
            },
            {
              icon: { source: 'custom', icon: '/technologies/bootstrap-logo' },
              title: 'Bootstrap',
            },
          ],
          images: [
            {
              h: 800,
              w: 1200,
              path: '/images/companies/MC/im.png',
            },
            {
              h: 711,
              w: 950,
              path: '/images/companies/MC/im_1.png',
            },
            {
              h: 711,
              w: 950,
              path: '/images/companies/MC/im_2.png',
            },
            {
              h: 711,
              w: 950,
              path: '/images/companies/MC/im_3.png',
            },
            {
              h: 380,
              w: 686,
              path: '/images/companies/MC/im_4.png',
            },
            {
              h: 382,
              w: 686,
              path: '/images/companies/MC/im_5.png',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'VC',
    title: 'Web Developer',
    company: 'VDS Consulting',
    icon: { source: 'custom', icon: '/organisms/vdsconsulting-logo' },
    image: '/images/companies/VC/brand.png',
    color: '#EDCD40',
    light: '#fcf7e1',
    details: {
      company: {
        description: '<b>VDS Consulting</b> is a Brussels start-up that brings customers with <b>fully customized IT solutions</b>.',
        links: [
          {
            title: 'LinkedIn',
            icon: { source: 'fa', icon: faLinkedinIn },
            link: 'https://www.linkedin.com/company/vds-consulting-belgium/',
          },
        ],
      },
      role: {
        description: 'As a <b>Full-Stack Developer</b> and <b>Brand / UI Designer</b>, my missions went from specifications with customers to design and implement projects architecture, delivery, writing user\'s guide, and of course, Ops, setting up servers and writing developer\'s guide, and design and implement components and websites.',
      },
      products: [
        {
          name: 'Brussels Aquariums e-commerce website',
          icon: { source: 'custom', icon: '/projects/brusselsaquariums-logo' },
          description: 'Full customized e-commerce solution for 10,000+ references',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/symfony-logo-alt' },
              title: 'Symfony',
            },
            {
              icon: { source: 'custom', icon: '/technologies/sass-logo' },
              title: 'Sass',
            },
            {
              icon: { source: 'custom', icon: '/technologies/facebook-api-logo' },
              title: 'Facebook Pages API',
            },
            {
              icon: { source: 'custom', icon: '/technologies/paypal-logo' },
              title: 'PayPal API',
            },
          ],
          images: [
            {
              h: 964,
              w: 1569,
              path: '/images/companies/VC/nba.jpg',
            },
          ],
        },
        {
          name: 'F@ctorio',
          icon: { source: 'custom', icon: '/projects/factorio-logo' },
          description: 'Factoring / Invoicing tool for IT firms',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/nodejs-logo' },
              title: 'NodeJS Express',
            },
            {
              icon: { source: 'custom', icon: '/technologies/mongodb-logo' },
              title: 'MongoDB',
            },
            {
              icon: { source: 'custom', icon: '/technologies/pug-logo' },
              title: 'Pug',
            },
          ],
          images: [
            {
              h: 964,
              w: 1569,
              path: '/images/companies/VC/fio.png',
            },
            {
              h: 964,
              w: 1569,
              path: '/images/companies/VC/fio_2.png',
            },
          ],
        },
        {
          name: 'Find an Umbrella',
          icon: { source: 'custom', icon: '/projects/findanumbrella-logo' },
          description: 'Umbrella company finder service',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/java-logo' },
              title: 'Java',
            },
            {
              icon: { source: 'custom', icon: '/technologies/spring-logo' },
              title: 'Spring',
            },
            {
              icon: { source: 'custom', icon: '/technologies/less-type' },
              title: 'Less',
            },
            {
              icon: { source: 'custom', icon: '/technologies/leaflet-logo' },
              title: 'Leaflet',
            },
          ],
          images: [
            {
              h: 800,
              w: 1600,
              path: '/images/companies/VC/fau.png',
            },
          ],
        },
        {
          name: 'CV-Broker',
          icon: { source: 'custom', icon: '/projects/cvbroker-logo' },
          description: 'Complete applicant management website for recruiters and companies',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/symfony-logo-alt' },
              title: 'Symfony',
            },
            {
              icon: { source: 'custom', icon: '/technologies/livecycle-logo' },
              title: 'Adobe LiveCycle',
            },
          ],
          images: [
            {
              h: 960,
              w: 1920,
              path: '/images/companies/VC/cvb.png',
            },
          ],
        },
        {
          name: 'My Landlord Club',
          icon: { source: 'custom', icon: '/projects/mylandlordclub-logo' },
          description: 'Real-estate crowd-funding',
          technologies: [],
          images: [
            {
              h: 560,
              w: 1200,
              path: '/images/companies/VC/mlc.jpg',
            },
            {
              h: 674,
              w: 384,
              path: '/images/companies/VC/mlc_2.png',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'BG',
    title: 'Lead Web Developer',
    company: 'Brayton Global',
    icon: { source: 'custom', icon: '/organisms/braytonglobal-logo-alt' },
    image: '/images/companies/BG/brand.png',
    color: '#DD7523',
    light: '#faeade',
    details: {
      company: {
        description: '<b>Brayton Global</b> is a well-known <b>IT consulting firm</b> and fast-growing international <b>recruitment hub</b> based in the heart of Brussels.',
        links: [
          {
            title: 'Website',
            icon: { source: 'fa', icon: faExternalLinkAlt },
            link: 'https://www.braytonglobal.com',
          },
          {
            title: 'LinkedIn',
            icon: { source: 'fa', icon: faLinkedinIn },
            link: 'https://www.linkedin.com/company/brayton-global/',
          },
        ],
      },
      role: {
        description: 'I worked as a <b>Lead Web Developer</b>. My missions were to track progress against long and short-term goals, communicate with the project manager and the team, keep motivation up, and setup tools to help the team with their daily work. In addition, as a Developer, I enforced standards and code quality and developed components, forms, and user interfaces.',
      },
      products: [
        {
          name: 'SkillMatrix',
          icon: { source: 'custom', icon: '/projects/skillmatrix-logo' },
          description: 'Complex Applicant Tracking System (ATS) with custom workflows and automatic categorization, for in-house purposes.',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/symfony-logo-alt' },
              title: 'Symfony',
            },
            {
              icon: { source: 'custom', icon: '/technologies/sass-logo' },
              title: 'Sass',
            },
          ]
        },
        {
          name: 'Vemasys',
          icon: { source: 'custom', icon: '/projects/vemasys-logo' },
          description: 'Vessel Management System, Saas ERP that aims to revolutionize goods transportation. Fleet Management, Invoicing, Maintenance, Security... 1800+ vessels are using Vemasys daily.',
          images: [
            {
              h: 901,
              w: 1600,
              path: '/images/companies/BG/vms_1.png'
            },
            {
              h: 884,
              w: 1572,
              path: '/images/companies/BG/vms_2.png'
            },
            {
              h: 666,
              w: 1278,
              path: '/images/companies/BG/vms_3.png'
            },
            {
              h: 1082,
              w: 2048,
              path: '/images/companies/BG/vms_4.png'
            },
            {
              h: 1078,
              w: 2048,
              path: '/images/companies/BG/vms_5.png'
            },
            {
              h: 989,
              w: 2000,
              path: '/images/companies/BG/vms_6.png'
            },
            {
              h: 1005,
              w: 2000,
              path: '/images/companies/BG/vms_7.png'
            },
          ],
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/symfony-logo-alt' },
              title: 'Symfony',
            },
            {
              icon: { source: 'custom', icon: '/technologies/sass-logo' },
              title: 'Sass',
            },
            {
              icon: { source: 'custom', icon: '/technologies/leaflet-logo' },
              title: 'Leaflet'
            },

            {
              icon: { source: 'custom', icon: '/technologies/bootstrap-logo' },
              title: 'Bootstrap'
            },
          ]
        },
      ],
      missions: [
        {
          icon: { source: 'fa', icon: faBrain },
          description: 'Preventive Maintenance<br />Capture precise vessel GPS positions for drive assists and autonomous driving',
        },
      ]
    },
  },
];

export default experience;
