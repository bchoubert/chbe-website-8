import { mobileThreshold, styles } from "assets";
import { FC, memo, ReactNode } from "react";

interface IPartiWithTitlePropsOptions {
  color: string;
  backgroundColor?: string;
  isSubtitle?: boolean;
  padding?: number;
  className?: string;
}

interface IPartiWithTitleProps {
  title: string;
  children: ReactNode;
  options: IPartiWithTitlePropsOptions;
}

const PartWithTitle: FC<IPartiWithTitleProps> = ({
  title,
  children,
  options,
}) => (
  <>
    <div className={`PartWithTitle ${options?.className || ""}`}>
      {options?.isSubtitle ? (
        <h4 className="title">{title}</h4>
      ) : (
        <h2 className="title">{title}</h2>
      )}
      <div className="content">{children}</div>
    </div>
    <style jsx>{`
      .PartWithTitle {
        padding: 1.5rem ${options?.padding || 0}px ${options?.padding || 0}px
          ${options?.padding || 0}px;
        ${styles.br}
        background-color: ${options?.backgroundColor || "transparent"};
      }
      .PartWithTitle .title {
        padding: 0 0.3em 0
          ${options?.backgroundColor || options?.color ? "0.3em" : "0"};
        display: inline;
        font-weight: normal;
        ${!options?.isSubtitle &&
        `color: #ffffff;
        background-color: ${options?.color};`}
      }
      .PartWithTitle .content {
        ${!options?.isSubtitle && "margin: 0 0 0 2rem;"}
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
