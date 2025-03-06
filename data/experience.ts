import { faAccessibleIcon, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowsSplitUpAndLeft, faArrowsToEye, faBrain, faBug, faChartSimple,
  faCheckSquare, faClock, faCogs, faComments, faCube, faDatabase, faDownload,
  faExternalLinkAlt, faGraduationCap, faHospital, faLayerGroup,
  faMagnifyingGlassChart, faMap, faPaintBrush, faPaintRoller,
  faPalette, faRuler, faSearch, faSquareCheck, faWrench,
} from '@fortawesome/free-solid-svg-icons';

import { IExperience } from 'types/business.types';

const experience: IExperience[] = [
  {
    id: 'BN',
    title: 'Full-Stack Developer',
    company: 'BnL - National Library of Luxembourg',
    icon: { source: 'custom', icon: '/organisms/bnl-logo' },
    image: '/images/companies/BN/brand.png',
    color: '#006DA1',
    light: '#c0ebff',
    details: {
      company: {
        isOrganization: true,
        description: 'The <b>National Library</b> collects, catalogues and preserves all analogue and digital publications published in Luxembourg and any works published abroad that relate to the Grand Duchy.<br />'
          + 'It is the country’s leading academic, research and cultural heritage library. In order to meet the requirements of its users, about three-quarters of its printed collections come from other countries and they cover different fields of knowledge.',
        links: [
          {
            title: 'Website',
            icon: { source: 'fa', icon: faExternalLinkAlt },
            link: 'https://bnl.public.lu/en.html',
          },
        ],
      },
      role: {
        description: 'As a <b>Full-Stack Developer</b>, I aim to maintain current solution, as well as develop new solutions and features : User Accessibility is key.<br />'
          + 'Data Formats, like MARC21 and Mets/Alto are used accross all the BnL projects.',
      },
      realisations: [
        {
          title: 'Accessibility',
          icon: faAccessibleIcon,
          description: 'Provide highly accessible websites for the public that matches State\'s requirements',
        },
        {
          title: 'Design',
          icon: faPalette,
          description: 'Design and update websites according to the BnL design guidelines, organizing meetings with the communication teams and reviewing with management',
        },
      ],
      products: [
        {
          name: 'eLuxemburgensia',
          icon: { source: 'custom', icon: '/organisms/bnl-logo' },
          description: 'Provides historical press and documents to thousands daily users.',
          longDescription: 'eLuxemburgensia, along with its selection, advanced search and viewer, permits users and professionals to fetch historical press as well as books, posters, manuscripts. With OCR, the original text is automatically available and translated.',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/java-logo' },
              title: 'Java Spring',
            },
            {
              icon: { source: 'custom', icon: '/technologies/typescript-logo' },
              title: 'TypeScript',
            },
            {
              icon: { source: 'custom', icon: '/technologies/nuxt-logo' },
              title: 'Nuxt / Vue',
            },
            {
              icon: { source: 'custom', icon: '/technologies/figma-logo' },
              title: 'Figma',
            },
          ],
          images: [
            {
              h: 944,
              w: 1918,
              path: '/images/companies/BN/elux.png',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'EC',
    title: 'Web Developer',
    company: 'European Commission',
    icon: { source: 'custom', icon: '/organisms/european-commission-logo' },
    image: '/images/companies/EC/brand.jpg',
    color: '#004494',
    light: '#bedcff',
    details: {
      company: {
        isOrganization: true,
        description: 'The <b>European Commission</b> proposes laws, makes sure EU laws are properly applied, and manages EU spending programmes.<br/>'
          + '<b>Unit DIGIT.B.3</b> provides, promotes and supports <b>Trans-European Services</b>, i.e. systems with responsibilities distributed <b>across the Commission</b>, national administrations and other bodies such as agencies.<br/>'
          + '<b>EU Provisioning</b> is a <b>business-critical ecosystem</b> of diverse solutions that <b>transform HR data into IT-usable entitlements</b>.',
        links: [
          {
            title: 'Website',
            icon: { source: 'fa', icon: faExternalLinkAlt },
            link: 'https://commission.europa.eu/',
          },
        ],
      },
      role: {
        description: 'As a <b>Web Developer Consultant</b>, I was in charge of <b>new features development</b> in the new tool, MSC.<br/>'
          + 'I participated in <b>design meetings, gathering feedbacks</b> to develop the best feature in terms of <b>needs, performance and error handling</b>.<br/><br/>'
          + 'I was also missioned to <b>train new recruits</b>, as well as <b>create tools using new technologies for better and faster developments</b>.',
      },
      realisations: [
        {
          title: 'Maintainability',
          icon: faSearch,
          description: 'Provide highly maintainable, tested and documented solutions',
        },
        {
          title: 'Specific Tooling & Automation',
          icon: faWrench,
          description: 'Develop tools that automate the work of teams and gain performance',
        },
        {
          title: 'Reporting',
          icon: faChartSimple,
          description: 'Multiple reporting tools, as well as checks and log analytics',
        },
        {
          title: 'Workflows, Validation & Simulation',
          icon: faArrowsSplitUpAndLeft,
          description: 'Multi-step workflows, with provisioning simulation and validation',
        },
        {
          title: 'Training and new technologies',
          icon: faGraduationCap,
          description: 'Onboard new members, and implement new testing and lifecycle technologies',
        },
      ],
      products: [
        {
          name: 'MSC',
          description: 'User Provisioning, Identity Access Management and Governance Administration',
          longDescription: 'Product that permits Team Managers and other product maintainers to administrate users, rights and groups',
          technologies: [
            {
              icon: { source: 'custom', icon: '/technologies/java-logo' },
              title: 'Java Spring',
            },
            {
              icon: { source: 'custom', icon: '/technologies/oracle-logo' },
              title: 'Oracle PL/SQL',
            },
            {
              icon: { source: 'custom', icon: '/technologies/angular-logo' },
              title: 'Angular',
            },
            {
              icon: { source: 'custom', icon: '/technologies/ngrx-logo' },
              title: 'NGRX',
            },
            {
              icon: { source: 'custom', icon: '/technologies/karma-logo' },
              title: 'Karma',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'AM',
    title: 'Web Developer & UI Reviewer',
    company: 'Amalia',
    icon: { source: 'custom', icon: '/organisms/amalia-logo' },
    image: '/images/companies/AM/brand.png',
    color: '#0C84F2',
    light: '#d6eafd',
    details: {
      company: {
        description: `<b>Amalia</b> is on a mission to inspire, enable, and reward <b>peak business performance</b>.${''
        } It helps companies simplify compensation & performance management along 3 axis: ${''
        } <ul><li>ICM (<b>Incentive Compensation</b> Management, how to align sales rep behavior to the company's goals),</li> ${''
        } <li>SPM (<b>Sales Performance</b> Management, tool that analyze and automatize sales rep processes),</li>${''
        } <li>EPM (<b>Enterprise Performance</b> Management, tool to plan, buget, forecast and report the business performance).</li></ul>`,
        accomplishments: [
          'Amalia certifies $100+ millions in sales commissions annually.',
          'Amalia raised 4 million euros.',
          'Amalia was listed as in the <b>best 20 startups in Europe in 2022</b> and is part of the famous <b>Future40</b> by StationF.',
        ],
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
            link: 'https://www.mirakl.com/',
          },
          {
            title: 'Swile',
            icon: { source: 'custom', icon: '/organisms/swile-logo' },
            link: 'https://www.swile.co/en',
          },
          {
            title: 'OpenClassrooms',
            icon: { source: 'custom', icon: '/organisms/openclassrooms-logo' },
            link: 'https://openclassrooms.com/en/',
          },
          {
            title: 'Yousign',
            icon: { source: 'custom', icon: '/organisms/yousign-logo' },
            link: 'https://yousign.com/',
          },
          {
            title: 'Getronics',
            icon: { source: 'custom', icon: '/organisms/getronics-logo' },
            link: 'https://www.getronics.com/',
          },
          {
            title: 'SudOuest',
            link: 'https://www.sudouest.fr/',
          },
          {
            title: 'Qonto',
            link: 'https://qonto.com/en',
          },
        ],
      },
      role: {
        description: `As a <b>Web Developer</b> & <b>UI Reviewer</b>, I was in charge of new feature development, participated in UI/UX reviews,${''
        } designed complex technical solutions and mockups.<br/><br/>${''
        }I was in charge of both <b>validating/enriching ticket specifications</b>, helping development team I was part of for a faster development, and <b>checking the realisations</b>.<br/><br/>${''
        }I was also missioned to be the <b>Tests Referral</b>, ${''
        } I increased code quality by providing standards and new test solutions. I implemented Testing Library tests, and animated workshops to train the whole team and around new testing technologies.`,
      },
      realisations: [
        {
          title: 'Data connectors',
          icon: faDatabase,
          description: 'Develop and maintain data connectors, from oauth2 authentications to cron scripts that launch data syncrhonisation.',
        },
        {
          title: 'Downloads',
          icon: faDownload,
          description: 'A Google Cloud Run module that starts on HTTP-requests, that auto-scales and that permits to download very large files.',
        },
        {
          title: 'Tests',
          icon: faBug,
          description: 'Implementing new testing solutions using RTL and Cypress, do tech trainings and write documentations. Increase code quality and coverage by 16%, for better maintenance and less regression.',
        },
        {
          title: 'Design System',
          icon: faRuler,
          description: 'Implement a well-documented, well tested design system, with Storybook. Mentor and train team members, providing materials, guidelines and meetings.',
        },
        {
          title: 'Tracing',
          icon: faArrowsToEye,
          description: 'Develop a tool to let salesReps understand the full calculation of their commission.',
        },
      ],
      products: [
        {
          name: 'Amalia.io',
          icon: { source: 'custom', icon: '/organisms/amalia-logo' },
          description: 'Real-time sales performance management Saas solution',
          longDescription: `Sales Representatives have a variable salary (<b>compensation</b>) depending on how many new contracts they permitted to sign for their company.${''
          } It depends on the contract type, if it's a new contract or a renewal, upsell, their team achievements... Nowadays, companies must build their compensation plan to be <b>very attractive</b>,${''
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
              path: '/images/companies/AM/brand.png',
            },
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
            {
              h: 813,
              w: 1507,
              path: '/images/companies/AM/am_12.png',
            },
            {
              h: 800,
              w: 1200,
              path: '/images/companies/AM/am_13.png',
            },
            {
              h: 751,
              w: 1080,
              path: '/images/companies/AM/am_14.png',
            },
            {
              h: 1162,
              w: 1479,
              path: '/images/companies/AM/am_15.png',
            },
          ],
          link: 'https://www.amalia.io/',
        },
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
      illustration: {
        h: 853,
        w: 853,
        path: '/images/companies/SK/illustration.jpg',
      },
      company: {
        description: '<b>Sogelink</b> supports all players in the <b>infrastructure and construction</b> ecosystem with <b>software, cloud and mobile solutions</b>.',
        accomplishments: [
          'Sogelink provides solutions for more than 37k customers.',
        ],
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
            link: 'https://www.colas.com/en',
          },
          {
            title: 'Bouygues',
            icon: { source: 'custom', icon: '/organisms/bouygues-logo' },
            link: 'https://www.bouygues-es.com/',
          },
          {
            title: 'Eiffage',
            icon: { source: 'custom', icon: '/organisms/eiffage-logo' },
            link: 'https://www.eiffage.com/',
          },
          {
            title: 'Vinci',
            icon: { source: 'custom', icon: '/organisms/vinci-logo' },
            link: 'https://www.vinci.com/',
          },
          {
            title: 'SNCF',
            icon: { source: 'custom', icon: '/organisms/sncf-logo' },
            link: 'https://www.sncf.com/en',
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
          },
        ],
      },
      role: {
        description: 'As a <b>UI Designer</b> & <b>R&D Full-Stack Web Developer</b>, I designed and developed may components and webpages, as well as developed POC related to 2D and 3D on the web.',
      },
      realisations: [
        {
          title: 'Reusable components',
          icon: faPaintRoller,
          description: 'Design and develop highly-reusable, maintainable and performant components, meeting with the design team and other product teams.',
        },
        {
          title: 'Forms',
          icon: faCheckSquare,
          description: 'Design and develop form components for a better UX.',
        },
        {
          title: 'Icons',
          icon: faPalette,
          description: 'Design new business and technical monochrome and bi-tone icons for a land surveyor application.',
        },
        {
          title: 'GeoServer API',
          icon: faLayerGroup,
          description: 'Use the GeoServer API to update PCRS and Geometry Layers in real-time.',
        },
        {
          title: '2D / 3D file viewers',
          icon: faCube,
          description: 'Develop POCs related to 2D and 3D files visualization in web browsers (DAE, DXF, DWG).',
        },
        {
          title: 'Scatter plots',
          icon: faMagnifyingGlassChart,
          description: 'Optimize 3D scatter plots filter and transformation algorithms.',
        },
      ],
      products: [
        {
          name: 'Maplink',
          icon: { source: 'custom', icon: '/projects/maplink-logo-alt' },
          description: 'Maplink is both a map component integrated into DICT.fr and a Network and Urban Properties Management Solution',
          longDescription: 'Based on <b>GeoServer</b>, MapLink is a product used internally, externally, and as part of another product DICT.fr. DICT.fr offers <b>construction work declaration</b>, which is mandatory in France. Used externally or internally, Maplink permits companies to <b>manage their networks</b>, update them as build was done.',
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
          longDescription: 'Geosnap provides land surveyors with a solution where construction workers can take photos of their advancement, send them to the platform to <b>build a scatter plot and 3D model</b>, then let the land surveyor to finalize the plans and update the networks. Along with productivity, Geosnap gives land surveyors <b>project management, cloud data filtering and consolidation, cloud 3D model build</b>...',
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
              h: 886,
              w: 1433,
              path: '/images/companies/SK/gs_3.jpg',
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
      illustration: {
        h: 640,
        w: 640,
        path: '/images/companies/MC/illustration.jpg',
      },
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
            icon: { source: 'fa', icon: faHospital },
            link: 'https://www.maincare.com/qui-sommes-nous/le-groupe-maincare-10-23.html',
          },
        ],
      },
      role: {
        description: 'I was a <b>Web Developer</b>, my goals were to develop a new prescription tool for general practitioners and maintain existing modules of the app.',
      },
      realisations: [
        {
          title: 'Future Venues',
          icon: faClock,
          description: 'Work on patient path and develop a module about planned future venues.',
        },
        {
          title: 'Form UX',
          icon: faSquareCheck,
          description: 'Debate about form UX design with a surgeon, taking into account equipment, …',
        },
        {
          title: 'Component design & development',
          icon: faPaintBrush,
          description: 'Design and Develop new functionalities, Participate in specifications meetings, Providing documentation about new components I develop and integrated.',
        },
      ],
      products: [
        {
          name: 'IdeoMed / IdeoSanté',
          icon: { source: 'custom', icon: '/projects/ideomed-logo' },
          description: 'Complex Sass Health platform that focuses on prescriptions and patient journey',
          longDescription: 'With its own component library, IdeoMed is a complete solution for medication, prescription, staff, budget, document sharing for hospitals and doctors.',
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
    image: '/images/companies/VC/brand.jpg',
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
      realisations: [
        {
          title: 'Custom solution for custom needs',
          icon: faComments,
          description: 'Meet with customers, Write Specifications, Design layouts and views.',
        },
      ],
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
          longDescription: 'Independant & automatic CV creation module, calling official European Commission APIs and custom APIS and generating on-the-fly PDFs.',
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
          longDescription: 'Website audit for web-marketing, UI design and accessibility problematics',
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
        accomplishments: [
          '1800+ vessels are using Vemasys daily.',
          'Vemasys was validated by Interreg (European Commission Danube modernization program)',
        ],
      },
      role: {
        description: 'I worked as a <b>Lead Web Developer</b>. My missions were communicate with the project manager and the team, keep motivation up, and setup tools to help the team with their daily work. In addition, as a Developer, I enforced standards and code quality and developed components, forms, and user interfaces.',
      },
      realisations: [
        {
          title: 'Performance and modularity',
          icon: faCogs,
          description: 'Design and Develop a complex architecture with cache storage and modular architecture.',
        },
        {
          title: 'Front-End',
          icon: faPaintRoller,
          description: 'Implement Front-End following mock-ups and solving ergonomic problems, Create elegant designs and easily maintainable code.',
        },
        {
          title: 'Specifications',
          icon: faComments,
          description: 'Participate in specifications meetings with the Product Owner and Fleet owners.',
        },
        {
          title: 'Lead to help',
          icon: faClock,
          description: 'Organize daily tasks of the team, track short-term and long term progress.',
        },
        {
          title: 'Map',
          icon: faMap,
          description: 'Design and Develop a scalable map with layer server and 25k+ pointers.',
        },
      ],
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
          ],
        },
        {
          name: 'Vemasys',
          icon: { source: 'custom', icon: '/projects/vemasys-logo' },
          description: 'Vessel Management System, Saas ERP that aims to revolutionize goods transportation. Fleet Management, Invoicing, Maintenance, Security...',
          images: [
            {
              h: 630,
              w: 1120,
              path: '/images/companies/BG/vms_1.jpg',
            },
            {
              h: 884,
              w: 1572,
              path: '/images/companies/BG/vms_2.png',
            },
            {
              h: 666,
              w: 1278,
              path: '/images/companies/BG/vms_3.png',
            },
            {
              h: 1082,
              w: 2048,
              path: '/images/companies/BG/vms_4.png',
            },
            {
              h: 1078,
              w: 2048,
              path: '/images/companies/BG/vms_5.png',
            },
            {
              h: 989,
              w: 2000,
              path: '/images/companies/BG/vms_6.png',
            },
            {
              h: 703,
              w: 1400,
              path: '/images/companies/BG/vms_7.jpg',
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
              title: 'Leaflet',
            },

            {
              icon: { source: 'custom', icon: '/technologies/bootstrap-logo' },
              title: 'Bootstrap',
            },
          ],
        },
      ],
      missions: [
        {
          icon: { source: 'fa', icon: faBrain },
          description: 'Preventive Maintenance<br />Capture precise vessel GPS positions for drive assists and autonomous driving',
        },
      ],
    },
  },
];

export default experience;
