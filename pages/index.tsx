import { faBuilding, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FC, memo, ReactNode } from "react";

import { mobileThreshold } from "assets";

import EExperience from "components/Business/experience/EExperience";
import EWork from "components/Business/work/EWork";
import Layout from "components/Layout";
import ProfileImage from "components/ProfileImage";
import Section from "components/Section";
import Semipage from "components/Semipage";

import experience from "data/experience";
import profile from "data/profile";
import work from "data/work";

import { ISection } from "types/common.types";

export const config = {
  amp: true,
};

const sections: ISection[] = [
  {
    title: "Work",
    icon: { source: "fa", icon: faSuitcase },
    caption: "Independent and Personal",
    content: work.map((w) => <EWork key={w.title} {...w} />),
  },
  {
    title: "Experience",
    icon: { source: "fa", icon: faBuilding },
    caption: "Contract & Freelance",
    content: experience.map((e) => (
      <EExperience key={`${e.title}${e.company}`} {...e} />
    )),
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
        width: 100%;
        flex-direction: row;
        padding: 2rem;
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
      .sections {
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
      }
      @media screen and (max-width: ${mobileThreshold}px) {
        .flx {
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
