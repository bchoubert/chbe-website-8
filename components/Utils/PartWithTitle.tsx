import { mobileThreshold } from "assets";
import { FC, memo, ReactNode } from "react";

interface IPartiWithTitleProps {
  title: string;
  children: ReactNode;
  color: string;
  isSubtitle?: boolean;
}

const PartWithTitle: FC<IPartiWithTitleProps> = ({
  title,
  children,
  color,
  isSubtitle,
}) => (
  <>
    <div className="PartWithTitle">
      {isSubtitle ? (
        <h4 className="title">{title}</h4>
      ) : (
        <h2 className="title">{title}</h2>
      )}
      <div className="content">{children}</div>
    </div>
    <style jsx>{`
      .PartWithTitle {
        padding: 1.5rem 0 0 0;
      }
      .PartWithTitle .title {
        padding: 0 0.3em;
        display: inline;
        font-weight: normal;
        ${!isSubtitle && `color: #ffffff; background-color: ${color};`}
      }
      .PartWithTitle .content {
        ${!isSubtitle && "margin: 0 0 0 2rem;"}
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
