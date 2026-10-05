import type { SVGProps } from "react";

const GraphQL = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3.2 19.2 7.6v8.8L12 20.8l-7.2-4.4V7.6L12 3.2Z"
      stroke="#E535AB"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />

    <circle
      cx="12"
      cy="3.2"
      r="1.5"
      fill="#E535AB"
    />

    <circle
      cx="19.2"
      cy="7.6"
      r="1.5"
      fill="#E535AB"
    />

    <circle
      cx="19.2"
      cy="16.4"
      r="1.5"
      fill="#E535AB"
    />

    <circle
      cx="12"
      cy="20.8"
      r="1.5"
      fill="#E535AB"
    />

    <circle
      cx="4.8"
      cy="16.4"
      r="1.5"
      fill="#E535AB"
    />

    <circle
      cx="4.8"
      cy="7.6"
      r="1.5"
      fill="#E535AB"
    />

    <path
      d="M12 6v12M6.2 8.5l11.6 7M6.2 15.5l11.6-7"
      stroke="#E535AB"
      strokeWidth="1.2"
    />
  </svg>
);

export { GraphQL };