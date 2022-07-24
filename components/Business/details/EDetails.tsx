import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FC, memo, useMemo } from "react";

import { styles } from "assets";

import ESubDetails from "components/Business/ESubDetails";
import Icon from "components/Utils/Icon";
import IconWithText from "components/Utils/IconWithText";
import PartWithTitle from "components/Utils/PartWithTitle";
import Pill from "components/Utils/Pill";

import { IBusinessCommon, IDetails, IExperience, IIcon, IWork } from "types";

// PARTS
interface EDetailsPart {
  details: IDetails;
  work?: IWork;
  experience?: IExperience;
  common: IBusinessCommon;
}

const EDetailsCompany: FC<EDetailsPart> = ({ details, common }) => (
  <PartWithTitle title="Company" color={common.color}>
    <>
      <div dangerouslySetInnerHTML={{ __html: details.company.description }} />
      {(details.company.links || []).map((l) => (
        <Link passHref href={l.link} key={l.title}>
          <a target="_blank">
            <Pill {...l} textColor={common.color} />
          </a>
        </Link>
      ))}
    </>
  </PartWithTitle>
);

const EDetailsRole: FC<EDetailsPart> = ({ details, common }) => (
  <PartWithTitle title="My role" color={common.color}>
    <div dangerouslySetInnerHTML={{ __html: details.role.description }} />
  </PartWithTitle>
);

const EDetailsProducts: FC<EDetailsPart> = ({ details, common }) => (
  <PartWithTitle title="Products" color={common.color}>
    {details.products.map((p) => (
      <div key={p.name}>
        <IconWithText
          icon={p.icon}
          title={p.name}
          caption={p.description}
          rightContent={
            p.link ? (
              <Link passHref href={p.link}>
                <a
                  className="d_link_icon"
                  style={{ color: common.color }}
                  target="_blank"
                >
                  <Icon icon={{ source: "fa", icon: faExternalLinkAlt }} />
                </a>
              </Link>
            ) : null
          }
        />
        <div className="d_tech">
          {(p.technologies || []).map((tech, i) => (
            <Pill
              key={`p_${i}`}
              icon={tech.icon}
              light={common.light}
              title={tech.title}
            />
          ))}
        </div>
        <div className="d_pictures">
          {(p.images || []).map((img, i) => (
            <div
              key={`img_${i}`}
              className="d_picture_content"
              style={{
                width: (img.w * 200) / img.h,
                height: 200,
              }}
            >
              <amp-img
                className="d_picture"
                height={img.h}
                width={img.w}
                src={img.path}
                lightbox
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </PartWithTitle>
);

interface EDetailsProps {
  work?: IWork;
  experience?: IExperience;
}

const EDetails: FC<EDetailsProps> = ({ work, experience }) => {
  const common: IBusinessCommon = useMemo(
    () => work || experience,
    [work, experience]
  );
  const details = useMemo(() => common.details, [common]);

  if (!details) {
    return null;
  }

  return (
    <>
      <div className="EDetails">
        {details.company && (
          <EDetailsCompany details={details} common={common} />
        )}
        {details.role && <EDetailsRole details={details} common={common} />}
        {details.products && (
          <EDetailsProducts details={details} common={common} />
        )}
        {details.sub && <ESubDetails subDetails={details} />}
      </div>
      <style jsx global>{`
        .EDetails .d_title {
          display: inline-block;
          padding: 0 0.3em;
          color: #ffffff;
          font-weight: normal;
          margin-bottom: 0.5rem;
        }
        .EDetails .d_link {
          display: inline-block;
          margin: 0.5rem 1rem 0 0;
          text-decoration: none;
        }
        .EDetails .d_tech {
          font-size: 85%;
          margin-left: 1.5rem;
        }
        .EDetails .d_pictures {
          display: flex;
          flex-direction: row;
          flex-flow: wrap;
          margin-left: 1.5rem;
        }
        .EDetails .d_picture_content {
          position: relative;
          display: inline-block;
        }
        .EDetails .d_picture {
          margin: 0.5rem;
          cursor: pointer;
          ${styles.br}
        }
        .EDetails .d_link_icon {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 0 0 3rem;
        }
        .EDetails {
          margin-top: 2rem;
          width: 100%;
          position: relative;
        }
      `}</style>
    </>
  );
};

export default memo(EDetails);
