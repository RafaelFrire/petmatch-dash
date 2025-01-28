type svgProps = {
  width: number;
  height: number;
} & React.PropsWithChildren<React.ComponentPropsWithRef<"svg">>;

const ThreeDotIcon: React.FC<svgProps> = ({ width, height, ...props }) => {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      width={width}
      height={height}
      {...props}
      id="Glyph"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z"
          id="XMLID_287_"
        ></path>
        <path
          d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z"
          id="XMLID_289_"
        ></path>
        <path
          d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z"
          id="XMLID_291_"
        ></path>
      </g>
    </svg>
  );
};

export default ThreeDotIcon;
