type svgProps = {
  width: number;
  height: number;
} & React.PropsWithChildren<React.ComponentPropsWithRef<"svg">>;

const ArrowRight: React.FC<svgProps> = ({ width, height }: svgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 5 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 10L4 5.5L1 1" stroke="#B80000" />
    </svg>
  );
};

export default ArrowRight;
