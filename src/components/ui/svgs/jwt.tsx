import type { SVGProps } from "react";

const JWT = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 1.5 21 6v12l-9 4.5L3 18V6l9-4.5Z"
      fill="#000000"
    />
    <path
      d="M8.4 7.2h2.1v5.1c0 1.02.49 1.57 1.5 1.57s1.5-.55 1.5-1.57V7.2h2.1v5.3c0 2.12-1.25 3.3-3.6 3.3s-3.6-1.18-3.6-3.3V7.2Z"
      fill="#FFFFFF"
    />
    <path
      d="M7 17.2h10"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export { JWT };