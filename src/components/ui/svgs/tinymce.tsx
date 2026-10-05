import type { SVGProps } from "react";

const TinyMCE = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 4.5h18v15H3v-15Z"
      fill="#20A8E0"
    />
    <path
      d="M6 7h12v2H6V7Zm0 4h8v2H6v-2Zm0 4h10v2H6v-2Z"
      fill="white"
    />
    <path
      d="M17 11h1.5v4H17v-4Zm-1.5 1.5H20V14h-4.5v-1.5Z"
      fill="white"
    />
  </svg>
);

export { TinyMCE };