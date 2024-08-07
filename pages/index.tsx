import {
  faAward, faBuilding, faSchool, faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import { FC, memo, Fragment } from 'react';

import { mobileThreshold } from 'assets';
import { ISection } from 'types/common.types';

import ECertificate from 'components/Business/ECertificate';
import EEducation from 'components/Business/EEducation';
import EExperience from 'components/Business/experience/EExperience';
import EWork from 'components/Business/work/EWork';
import Icon from 'components/Utils/content/Icon';
import ProfileImage from 'components/Utils/content/ProfileImage';
import Layout from 'components/Utils/layout/Layout';
import Section from 'components/Utils/layout/Section';
import Semipage from 'components/Utils/layout/Semipage';

import certificates from 'data/certificates';
import educations from 'data/educations';
import experience from 'data/experience';
import profile from 'data/profile';
import work from 'data/work';

export const config = {
  amp: true,
};

const sections: ISection[] = [
  {
    title: 'Work',
    icon: { source: 'fa', icon: faSuitcase },
    caption: 'Independent and Personal',
    content: work.map((w) => <EWork key={w.title} {...w} />),
  },
  {
    title: 'Experience',
    icon: { source: 'fa', icon: faBuilding },
    caption: 'Contract & Freelance',
    content: experience.map((e) => (
      <EExperience key={`${e.title}${e.company}`} {...e} />
    )),
  },
  {
    title: 'Certifications',
    icon: { source: 'fa', icon: faAward },
    caption: 'Certificates & Diplomas',
    content: certificates.map((c) => <ECertificate key={c.id} {...c} />),
    moreLink: 'https://drive.google.com/drive/folders/0B3eUGKZH1aIyVnlUWUpBMnQ5aFE?resourcekey=0-U-35opy4f0AQYRm8llam6A&usp=sharing',
  },
  {
    title: 'Education',
    icon: { source: 'fa', icon: faSchool },
    caption: 'Learning',
    content: educations.map((c) => <EEducation key={c.id} {...c} />),
    moreLink: 'https://drive.google.com/drive/folders/0B3eUGKZH1aIyVnlUWUpBMnQ5aFE?resourcekey=0-U-35opy4f0AQYRm8llam6A&usp=sharing',
  },
];

const Index: FC = () => (
  <>
    <Layout>
      <Semipage>
        <div className="flx">
          <div className="flx-i">
            <div>
              <h1 className="headline">
                <amp-img
                  alt=""
                  fallback=""
                  width="30"
                  height="30"
                  src="images/wave.png"
                  className="wave"
                />
                Hi!
              </h1>
              <h2 className="sub">{profile.headline}</h2>
              <h3 className="subs">
              {profile.subheadlines.map((sh) => (
                <Fragment key={sh}>{sh}<br /></Fragment>
              ))}
              </h3>
              <h3></h3>
              <a href={profile.resume} target="_blank" className="resume">
                <Icon
                  icon={{ source: 'component', icon: 'download' }}
                  options={{ color: '#FFFFFF' }}
                />
                Download my Resume
              </a>
            </div>
          </div>
          <div className="flx-i">
            <ProfileImage />
          </div>
        </div>
      </Semipage>
      <div className="sections">
        {sections.map((s) => (
          <Section key={s.title} {...s} />
        ))}
      </div>
    </Layout>
    <style jsx>{`
      .flx {
        display: flex;
        height: 100%;
        width: 80%;
        margin: 0 auto;
        flex-direction: row;
        padding: 2rem 0;
        box-sizing: border-box;
      }
      .flx-i {
        flex: 1;
        height: 100%;
        display: inline-flex;
        align-items: center;
        text-align: left;
        justify-content: center;
        flex-direction: column;
      }
      .wave {
        display: inline-block;
        height: 1em;
        width: 1em;
        margin-right: 0.5em;
      }
      .sub {
        font-size: 1.2rem;
        font-weight: normal;
      }
      .subs {
        font-size: 1rem;
        margin-top: 1rem;
        font-weight: normal;
      }
      .resume {
        margin-top: 1rem;
        padding: 0.5rem;
        background-color: #222222;
        text-decoration: none;
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        border-radius: 0.25rem;
      }
      .sections {
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
      }
      @media screen and (max-width: ${mobileThreshold}px) {
        .flx {
          width: 90%;
          flex-direction: column-reverse;
        }
        .sections {
          width: 90%;
        }
      }
    `}</style>
  </>
);

export default memo(Index);
