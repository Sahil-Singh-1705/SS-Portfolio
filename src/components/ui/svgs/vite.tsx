import type { SVGProps } from "react";

const Vite = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="m22.5 12-4.1 7.09L12 22.5l-6.4-3.41L1.5 12 5.6 4.91 12 1.5l6.4 3.41L22.5 12Z"
      fill="#646CFF"
    />
    <path
      d="m15.92 5.45-3.75 7.02h2.2l-3.07 6.08 5.06-7.28h-2.27l1.83-5.82Z"
      fill="#FFD028"
    />
  </svg>
);

export { Vite };