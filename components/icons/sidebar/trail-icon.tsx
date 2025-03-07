import { IconsTypes } from "@/types/icon";
import React from "react";

const TrailIcon = ({ bg = "#808080", size = 16 }: IconsTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_112_6177)">
        <path
          d="M6.00004 12.0002L1.33337 14.6668V4.00016L6.00004 1.3335M6.00004 12.0002L10.6667 14.6668M6.00004 12.0002V1.3335M10.6667 14.6668L14.6667 12.0002V1.3335L10.6667 4.00016M10.6667 14.6668V4.00016M10.6667 4.00016L6.00004 1.3335"
          stroke={bg}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_112_6177">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TrailIcon;
