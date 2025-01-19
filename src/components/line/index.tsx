type lineProps = {
  width: string;
  height: string;
};

const Line = ({ }: lineProps) => {
  return <div className={`w-[1px] h-[25px] bg-primary100`}></div>;
};

export default Line;
