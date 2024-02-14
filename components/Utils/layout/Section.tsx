import { FC, memo } from "react";

import IconWithText from "components/Utils/content/IconWithText";

import { ISection } from "types/common.types";
import { mobileThreshold } from "assets";

const Section: FC<ISection> = ({ icon, title, caption, content }) => (
  <>
    <div className="root">
      <IconWithText
        icon={icon}
        title={title}
        caption={caption}
        options={{ size: 1.4 }}
      />
      <div className="content">{content}</div>
    </div>
    <style jsx>{`
      .root {
        margin-top: 2rem;
      }

      .content {
        margin-top: 0.5rem;
        display: flex;
        flex-flow: wrap;
        gap: 1rem;
      }
    `}</style>
  </>
);

export default memo(Section);
