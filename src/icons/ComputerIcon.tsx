import * as React from "react"

function ComputerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_869_78)"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <path
          d="M46.667 9.333H9.333A2.333 2.333 0 007 11.667V35a2.333 2.333 0 002.333 2.333h37.334A2.333 2.333 0 0049 35V11.667a2.333 2.333 0 00-2.333-2.334zM16.334 46.667h23.333M21 37.333v9.334M35 37.333v9.334"
          strokeLinejoin="round"
        />
        <path d="M8 32h40" />
      </g>
      <defs>
        <clipPath id="clip0_869_78">
          <path fill="#fff" d="M0 0H56V56H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ComputerIcon
