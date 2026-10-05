import type { SVGProps } from "react";

const RestApi = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    <path
      d="M5 8h5"
      stroke="#61DAFB"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    <path
      d="M5 12h8"
      stroke="#61DAFB"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    <path
      d="M5 16h4"
      stroke="#61DAFB"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    <path
      d="M16 9v6M13.5 11.5 16 9l2.5 2.5M13.5 12.5 16 15l2.5-2.5"
      stroke="#61DAFB"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { RestApi };