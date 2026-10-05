import type { SVGProps } from "react";

const Html5 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-label="HTML5"
    role="img"
  >
    {/* HTML5 shield */}
    <path
      fill="#E34F26"
      d="M1 0h510l-46.36 464.01L256 512 47.36 464.01 1 0Z"
    />

    {/* Right side */}
    <path
      fill="#EF652A"
      d="M256 472.28l168.57-38.94L464.38 42H256v430.28Z"
    />

    {/* Left side of HTML mark */}
    <path
      fill="#EBEBEB"
      d="M104.2 96h303.6l-10.9 108.9H145.1l7.1 71.1h237.4l-12.4 123.9L256 432l-111.2-32.1-7.6-76.1h58.3l4.1 39.5 56.4 15.1 56.5-15.1 5.9-58.4H129.2L117.1 96Z"
    />

    {/* Right side of HTML mark */}
    <path
      fill="#FFFFFF"
      d="M256 96h151.8l-10.9 108.9H256v-54.5h88.3l5.4-54.4H256V96Zm0 180h133.6l-12.4 123.9L256 432v-53.7l56.5-15.1 5.9-58.4H256V276Z"
    />
  </svg>
);

export { Html5 };