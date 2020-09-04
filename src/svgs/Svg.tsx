import React from "react";

interface Props {
  size: number;
  color?: string;
}

export const ArrowLeft = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.65}
    viewBox="0 0 14.143 9"
  >
    <path
      d="M13.339,3.7H2.732l2.33-2.33a.777.777,0,0,0,0-1.125.777.777,0,0,0-1.125,0l-3.7,3.7a.777.777,0,0,0,0,1.125l3.7,3.7A.8.8,0,0,0,5.063,7.634L2.732,5.3H13.339a.8.8,0,1,0,0-1.607Z"
      fill={color}
    />
  </svg>
);

export const ArrowDown = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 157}
    viewBox="0 0 9.821 15.434"
  >
    <path
      d="M14.557,4.034H2.982L5.525,1.491a.848.848,0,0,0,0-1.228A.848.848,0,0,0,4.3.263L.263,4.3a.848.848,0,0,0,0,1.228L4.3,9.558A.868.868,0,0,0,5.525,8.331L2.982,5.788H14.557a.877.877,0,0,0,0-1.754Z"
      transform="translate(0 15.434) rotate(-90)"
      fill={color}
    />
  </svg>
);

export const ArrowRight = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.65}
    viewBox="0 0 28.061 17.857"
  >
    <g transform="translate(29.286 19.286) rotate(-180)">
      <path
        d="M26.467,7.334H5.421L10.045,2.71a1.541,1.541,0,0,0,0-2.232,1.541,1.541,0,0,0-2.232,0L.478,7.813a1.541,1.541,0,0,0,0,2.232l7.334,7.334a1.578,1.578,0,0,0,2.232-2.232L5.421,10.523H26.467a1.594,1.594,0,0,0,0-3.189Z"
        transform="translate(1.224 1.429)"
        fill={color}
      />
    </g>
  </svg>
);
