type svgProps = {
    width: number;
    height: number;
  } & React.PropsWithChildren<React.ComponentPropsWithRef<"svg">>;
  
  const HeartIcon: React.FC<svgProps> = ({ width, height }: svgProps) => {
    return (
    <svg
      width={width * 1.2}
      height={height * 1.2}
      viewBox="0 0 36 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2704 11.529C20.4117 9.41998 23.7208 9.48998 25.7837 11.757C27.8456 14.025 27.9167 17.637 25.9988 19.993L18.2686 28.485L10.5402 19.993C8.62227 17.637 8.69429 14.019 10.7554 11.757C12.8201 9.49298 16.1227 9.41698 18.2704 11.529ZM24.4929 13.17C23.1255 11.668 20.9195 11.607 19.4883 13.017L18.2713 14.215L17.0535 13.018C15.6177 11.606 13.4163 11.668 12.0453 13.172C10.687 14.662 10.6186 17.047 11.8702 18.623L18.2695 25.654L24.6688 18.624C25.9213 17.047 25.8529 14.665 24.4929 13.17Z"
        fill="#B80000"
      />
    </svg>
    );
  };
  
  export default HeartIcon;
  