type svgProps = {
    width: number;
    height: number;
  } & React.PropsWithChildren<React.ComponentPropsWithRef<"svg">>;
  
  const CheckWhiteIcon: React.FC<svgProps> = ({ width, height }: svgProps) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M4 12.6111L8.92308 17.5L20 6.5"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    );
  };
  
  export default CheckWhiteIcon;
  