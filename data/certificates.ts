import { ICertificate } from 'types/business.types';

const certificates: ICertificate[] = [
  {
    id: 'ITIL',
    title: 'ITIL 4 Foundation',
    color: '#8F63E5',
    light: '#ebe3fa',
    icon: { source: 'custom', icon: '/organisms/axelos-logo' },
    organization: 'Axelos - PeopleCert',
    year: '2024',
    link: 'https://drive.google.com/drive/folders/1hOVcNz5yagM2daf61-gx9eQflP5DZ9AE',
  },
  {
    id: 'Google',
    title: 'Mobile Web Specialist',
    color: '#4081ED',
    light: '#dde8fc',
    icon: { source: 'custom', icon: '/organisms/google-logo' },
    organization: 'Google',
    year: '2020',
    link: 'https://drive.google.com/drive/folders/1xSwFfMiSSnX22DUM402W-4FgpFuGvOU3',
  },
  {
    id: 'Scrimba',
    title: 'UI Design',
    color: '#C1B4F8',
    light: '#f4f1fe',
    icon: { source: 'custom', icon: '/organisms/scrimba-logo' },
    organization: 'Scrimba',
    year: '2020',
    link: 'https://drive.google.com/drive/folders/1L0plRWEL-PpzOxKVEtpNukSBOTpfCo_W',
  },
];

export default certificates;
