import { FC, memo } from 'react';

import { styles } from 'assets';
import { IIcon } from 'types/common.types';

import IconWithText from 'components/Utils/content/IconWithText';

interface CardProps {
  image: string;
  color: string;
  icon: IIcon;
  title: string;
  caption: string;
}

const Card: FC<CardProps> = ({
  image, color, icon, title, caption,
}) => (
  <>
    <div className="Card">
      <div className="Image-wrapper">
        <amp-img
          width="1200"
          height="800"
          src={image}
          className="Image-child"
          layout="responsive"
        />
      </div>
      <IconWithText icon={icon} title={title} caption={caption} />
    </div>
    <style jsx>{`
      .Card {
        display: block;
      }
      .Image-wrapper {
        width: 100%;
        padding-bottom: 66.6%;
        position: relative;
        ${styles.br}
        overflow: hidden;
        background-color: ${color};
      }
      .Image-child {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translate(15%, 10%) rotate(-20deg) scale(105%);
        ${styles.br}
        transition: transform .5s;
      }
      .Card:hover .Image-child {
        transform: translate(0, 0) rotate(0deg) scale(95%);
      }
    `}</style>
  </>
);

export default memo(Card);
