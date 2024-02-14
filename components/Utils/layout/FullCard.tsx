import { FC, memo, ReactNode } from "react";

import { styles } from "assets";

interface FullCardProps {
  image: string;
  color: string;
  children: ReactNode;
}

const FullCard: FC<FullCardProps> = ({ image, color, children }) => (
  <>
    <div className="FullCard">
      <div className="Content-wrapper">{children}</div>
      <div className="Image-wrapper">
        <amp-img
          width="1200"
          height="800"
          src={image}
          className="Image-child"
          layout="responsive"
        />
      </div>
    </div>
    <style jsx>{`
      .FullCard {
        display: flex;
        flex-direction: row;
        background-color: ${color};
        padding-bottom: 5rem;
        overflow: hidden;
      }
      .Content-wrapper {
        width: 50%;
        padding: 2rem;
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }
      .Image-wrapper {
        width: 50%;
        padding-bottom: 33.3%;
        position: relative;
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
    `}</style>
  </>
);

export default memo(FullCard);
