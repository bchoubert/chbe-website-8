import { mobileThreshold } from "assets";
import { FC, memo, ReactNode } from "react";

interface IPartiWithTitleProps {
  title: string;
  children: ReactNode;
  color: string;
}

const PartWithTitle: FC<IPartiWithTitleProps> = ({
  title,
  children,
  color,
}) => (
  <>
    <div className="PartWithTitle">
      <h2 className="title">{title}</h2>
      <div className="content">{children}</div>
    </div>
    <style jsx>{`
      .PartWithTitle {
        padding: 1rem 0;
      }
      .PartWithTitle .title {
        padding: 0 0.3em;
        color: #ffffff;
        display: inline;
        font-weight: normal;
        background-color: ${color};
      }
      .PartWithTitle .content {
        margin: 0 0 0 2rem;
        padding: 0.5em;
        background-color: #ffffff;
      }
      @media screen and (max-width: ${mobileThreshold}px) {
        .PartWithTitle .content {
          margin: 0;
        }
      }
    `}</style>
  </>
);

export default memo(PartWithTitle);
