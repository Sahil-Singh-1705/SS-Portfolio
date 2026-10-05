import type { SVGProps } from "react";

const Tiptap = (props: SVGProps<SVGSVGElement>) => (
    <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3.5"
      y="4"
      width="17"
      height="16"
      rx="2"
      fill="currentColor"
    />

    <path
      d="M7 8H10.2C11.19 8 12 8.81 12 9.8C12 10.79 11.19 11.6 10.2 11.6H7V8Z"
      fill="#050505"
    />

    <path
      d="M9.5 11.6L12 15"
      stroke="#050505"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path
      d="M14 8V16M14 8H16.2C17.19 8 18 8.81 18 9.8C18 10.79 17.19 11.6 16.2 11.6H14"
      stroke="#050505"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Tiptap };