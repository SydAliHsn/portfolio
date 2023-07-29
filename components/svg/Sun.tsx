import React from 'react';

const Sun = ({ height, width }: { height: number; width: number }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="5.98 5.98 36.03 36.03"
      width={width}
      height={height}
    >
      <path
        fill="#FF9800"
        d="M11 11H37V37H11z"
      />
      <path
        fill="#FF9800"
        d="M11.272 11.272H36.728V36.728H11.272z"
        transform="rotate(-45.001 24 24)"
      />
      <path
        fill="#FFEB3B"
        d="M13,24c0,6.077,4.923,11,11,11c6.076,0,11-4.923,11-11s-4.924-11-11-11C17.923,13,13,17.923,13,24"
      />
    </svg>
  );
};

export default Sun;
