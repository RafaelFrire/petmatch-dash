import ArrowRight from "@/icons/ArrowRight";

export type listItemProps = {
  text: string;
  path: string;
};

const ListItem:React.FC<listItemProps> = ({ text, path }) => {
  return (
    <a href={path}>
      <div className="font-normal flex md:w-32 h-3">
        <ArrowRight width={15} height={15} />
        {text}
      </div>
    </a>
  );
};

export default ListItem;
