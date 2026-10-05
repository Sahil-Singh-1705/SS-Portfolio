import type { SVGProps } from "react";

const Javascript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-label="JavaScript"
    role="img"
  >
    <path fill="#F7DF1E" d="M0 0h24v24H0z" />

    <path
      fill="#000"
      d="M5.1 18.1c.48.98 1.39 1.7 2.76 1.7 1.62 0 2.65-.84 2.65-2.67V10.1H8.45v6.91c0 .78-.32 1.18-.89 1.18-.6 0-.9-.41-1.23-1.05l-1.23.96Zm6.05-.08c.57 1.1 1.56 1.78 3.28 1.78 1.75 0 3.04-.91 3.04-2.58 0-1.53-.88-2.21-2.45-2.89l-.46-.2c-.8-.34-1.16-.57-1.16-1.12 0-.45.36-.79.93-.79.55 0 .91.23 1.23.79l1.42-.94c-.6-1.05-1.43-1.45-2.65-1.45-1.67 0-2.74 1.06-2.74 2.46 0 1.51.88 2.22 2.22 2.79l.46.2c.85.37 1.36.6 1.36 1.22 0 .51-.47.88-1.2.88-.87 0-1.37-.45-1.72-1.08l-1.56.93Z"
    />
  </svg>
);

export { Javascript };