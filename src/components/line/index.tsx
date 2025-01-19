type LineProps = {
  width: string;
  height: string;
  classname?: string;
};

const Line = ({ width, height, classname }: LineProps) => {
  return (
    <div
      style={{ width, height }}
      className={`bg-primary100 ${classname}`}
    ></div>
  );
};

export default Line;
