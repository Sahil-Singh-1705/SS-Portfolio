import type { SVGProps } from "react";

const Css3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-label="CSS3"
    role="img"
  >
    {/* CSS3 shield */}
    <path
      fill="#1572B6"
      d="M1.5 0h21l-1.91 21.56L12 24l-8.59-2.44L1.5 0Z"
    />

    {/* Right side */}
    <path
      fill="#33A9DC"
      d="M12 2v19.8l6.93-1.97L20.5 2H12Z"
    />

    {/* Left side of CSS mark */}
    <path
      fill="#EBEBEB"
      d="M5.92 4.39h14.03l-.27 3.06H9.25l.27 3.06h10.16l-.8 8.94L12 21.13l-6.88-1.68-.46-5.13h3.06l.24 2.68 4.04.99 4.03-.99.34-3.43H8.2L7.93 10.51h10.71l.27-3.06H6.19L5.92 4.39Z"
    />

    {/* Right side of CSS mark */}
    <path
      fill="#FFFFFF"
      d="M12 4.39h7.95l-.27 3.06H12V4.39Zm0 6.12h6.91l-.8 8.94L12 21.13v-3.14l4.03-.99.34-3.43H12v-3.06Z"
    />
  </svg>
);

export { Css3 };