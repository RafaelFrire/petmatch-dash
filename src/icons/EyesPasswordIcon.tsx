type svgProps = {
  width: number;
  height: number;
} & React.PropsWithChildren<React.ComponentPropsWithRef<"svg">>;

const EyesPasswordIcon: React.FC<svgProps> = ({ width, height }: svgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.9987 0.503357C5.83203 0.503357 2.2737 3.09502 0.832031 6.75336C2.2737 10.4117 5.83203 13.0034 9.9987 13.0034C14.1654 13.0034 17.7237 10.4117 19.1654 6.75336C17.7237 3.09502 14.1654 0.503357 9.9987 0.503357ZM9.9987 10.92C7.6987 10.92 5.83203 9.05336 5.83203 6.75336C5.83203 4.45336 7.6987 2.58669 9.9987 2.58669C12.2987 2.58669 14.1654 4.45336 14.1654 6.75336C14.1654 9.05336 12.2987 10.92 9.9987 10.92ZM9.9987 4.25336C8.61537 4.25336 7.4987 5.37002 7.4987 6.75336C7.4987 8.13669 8.61537 9.25336 9.9987 9.25336C11.382 9.25336 12.4987 8.13669 12.4987 6.75336C12.4987 5.37002 11.382 4.25336 9.9987 4.25336Z"
        fill="#B80000"
      />
    </svg>
  );
};

export default EyesPasswordIcon;
