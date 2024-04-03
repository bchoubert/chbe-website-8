import { IEducation } from 'types/business.types';

// LIGHT is https://mdigi.tools/lighten-color/#e3541a with 82% coefficient

const educations: IEducation[] = [
  {
    id: 'HV',
    title: 'CS for Web Programming',
    color: '#A31F32',
    light: '#f6cfd5',
    organization: 'HarvardX',
    year: '2020',
    icon: { source: 'custom', icon: '/organisms/harvardx-logo' },
    link: 'https://drive.google.com/drive/folders/1TPcYaqr3NMFwJLI7JT5eIzMOMvEnRyXu',
  },
  {
    id: 'PT',
    title: 'CS Engineer',
    color: '#009DDE',
    light: '#cbf0ff',
    organization: 'Polytech Lyon',
    year: '2017',
    icon: { source: 'custom', icon: '/organisms/polytech-logo' },
    link: 'https://drive.google.com/drive/folders/1rKjDl1ukR25LM-y8FvPaid1o1gbi246I',
  },
  {
    id: 'IUT',
    title: 'CS Analyst & Developer',
    color: '#E3541A',
    light: '#fae0d5',
    organization: 'Université Lyon 1',
    year: '2014',
    icon: { source: 'custom', icon: '/organisms/universitelyon-logo' },
    link: 'https://drive.google.com/drive/folders/1-IXJBwX-uWrFcsDHrJG_N6ovKW-TIRzD',
  },
];

export default educations;
