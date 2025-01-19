import ArrowRight from "@/icons/ArrowRight";

export type listItemProps = {
  text: string;
  path: string;
};

const ListItem = ({ text, path }: listItemProps) => {
  return (
    <a href={path} className="font-normal flex items-center py-1">
      <ArrowRight width={15} height={15} />
      {text}
    </a>
  );
};

export default ListItem;
