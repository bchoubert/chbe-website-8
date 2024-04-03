import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FC, memo } from 'react';

import { EDetailsPart } from 'types/business.types';

import Icon from 'components/Utils/content/Icon';
import IconCardH from 'components/Utils/content/IconCardH';
import Pill from 'components/Utils/content/Pill';
import PartWithTitle from 'components/Utils/layout/PartWithTitle';

import EImageList from '../EImageList';

const EDetailsProducts: FC<EDetailsPart> = ({ details, common }) => (
  <div className="EDetailsProducts">
    <PartWithTitle
      title={(details.products || []).length > 1 ? 'Products' : 'Product'}
      options={{ color: common.color }}
    >
      {details.products.map((p) => (
        <div key={p.name}>
          <IconCardH
            icon={p.icon}
            title={p.name}
            caption={p.description}
            rightContent={
              p.link ? (
                <a
                  className="d_link_icon"
                  style={{ color: common.color }}
                  target="_blank"
                  href={p.link}
                >
                  <Icon icon={{ source: 'fa', icon: faExternalLinkAlt }} />
                </a>
              ) : null
            }
            color={common.light}
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
          <EImageList images={p.images} />
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
      .EDetailsProducts .d_link {
        display: inline-block;
        margin: 0.5rem 1rem 0 1rem;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default memo(EDetailsProducts);
