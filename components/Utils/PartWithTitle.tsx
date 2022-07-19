import { FC, memo, ReactNode } from 'react';

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
      <h2 style={{ backgroundColor: color }} className="title">
        {title}
      </h2>
      <div className="content">
        {children}
      </div>
    </div>
    <style jsx>{`
    .PartWithTitle {
      padding: 1rem 0;
    }
    .PartWithTitle .title {
      padding: 0 .3em;
      color: #FFFFFF;
      display: inline;
      font-weight: normal;
    }
    .PartWithTitle .content {
      margin: 0 0 0 2rem;
      padding: .5em;
      background-color: #FFFFFF;
    }
    `}</style>
  </>
);

export default memo(PartWithTitle);
