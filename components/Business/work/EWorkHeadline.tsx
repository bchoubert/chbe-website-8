import FullCard from "components/Utils/FullCard";
import IconWithText from "components/Utils/IconWithText";
import { FC, memo } from "react";
import { IWork } from "types";

interface EWorkHeadlineProps {
  object: IWork;
}

const EWorkHeadline: FC<EWorkHeadlineProps> = ({ object }) => {
  return (
    <FullCard image={object.image} color={object.light}>
      <div>
        <h2>
          <IconWithText
            title={object.title}
            isInline
            icon={object.icon}
            size={1.3}
          />
        </h2>
        <h3 className="shortDescription">{object.shortDescription}</h3>
      </div>
    </FullCard>
  );
};

export default memo(EWorkHeadline);
