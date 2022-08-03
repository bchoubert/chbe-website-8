import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { styles } from "assets";
import Icon from "components/Utils/Icon";
import IconWithText from "components/Utils/IconWithText";
import PartWithTitle from "components/Utils/PartWithTitle";
import Pill from "components/Utils/Pill";
import Link from "next/link";
import { FC, memo } from "react";
import { EDetailsPart } from "types/business.types";

const EDetailsProducts: FC<EDetailsPart> = ({ details, common }) => (
  <div className="EDetailsProducts">
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
          {p.longDescription ? (
            <div
              className="d_longDescription"
              dangerouslySetInnerHTML={{ __html: p.longDescription }}
            />
          ) : null}
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
                  width: (img.w * 150) / img.h,
                  height: 150,
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
    <style jsx>{`
      .EDetailsProducts .d_link_icon {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 3rem;
      }
      .EDetailsProducts .d_longDescription {
        margin: 0.5rem 0 1rem 2rem;
        font-size: 90%;
      }
      .EDetailsProducts .d_tech {
        font-size: 85%;
        margin-left: 1.5rem;
      }
      .EDetailsProducts .d_pictures {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        margin-left: 1.5rem;
      }
      .EDetailsProducts .d_picture_content {
        position: relative;
        display: inline-block;
      }
      .EDetailsProducts .d_picture {
        margin: 0.5rem;
        cursor: pointer;
        ${styles.br}
      }
      .EDetailsProducts .d_link {
        display: inline-block;
        margin: 0.5rem 1rem 0 0;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default memo(EDetailsProducts);
