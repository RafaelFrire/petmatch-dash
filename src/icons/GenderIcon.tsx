type svgProps = {
  isMale: boolean;
  width: number;
  height: number;
} & React.PropsWithChildren<React.ComponentPropsWithRef<"svg">>;

export const GenderIcon: React.FC<svgProps> = ({ isMale, width, height }) => {
  return (
    <>
      {isMale ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00B878"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-venus"
          >
            <path d="M12 15v7" />
            <path d="M9 19h6" />
            <circle cx="12" cy="9" r="6" />
          </svg>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00B878"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-mars"
        >
          <path d="M16 3h5v5" />
          <path d="m21 3-6.75 6.75" />
          <circle cx="10" cy="14" r="6" />
        </svg>
      )}
    </>
  );
};
