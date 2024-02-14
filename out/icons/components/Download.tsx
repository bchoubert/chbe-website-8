import React, { FC, memo } from "react";

interface SvgComponentProps {
  color?: string;
}

const SvgComponent: FC<SvgComponentProps> = ({ color }) => (
  <svg
    style={{
      width: 24,
      height: 24,
    }}
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
  >
    <path
      fill={color || "currentColor"}
      d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7 7-7Z"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
