import React, { FC, memo } from 'react';

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
      fill={color || 'currentColor'}
      d="m18.09 11.77 1.47 6.33L14 14.74 8.44 18.1l1.46-6.33L5 7.5l6.47-.54L14 1l2.53 5.96L23 7.5l-4.91 4.27M2 12.43c.19 0 .38-.06.55-.17l3.2-2.11-1.57-1.36-2.73 1.8c-.461.3-.589.91-.29 1.41.2.27.52.43.84.43m-.84 9.12c.2.29.52.45.84.45.19 0 .38-.05.55-.16l4.11-2.71.34-1.37.31-1.45-5.86 3.85c-.461.31-.589.93-.29 1.39m.29-6.17a1 1 0 0 0-.29 1.38c.2.3.52.45.84.45.19 0 .38-.05.55-.16l5.42-3.55.27-1.19-.92-.81-5.87 3.88Z"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
