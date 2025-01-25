import ListItem, { listItemProps } from "../ListItem";

type linkListProps = {
    linkItems: listItemProps[]
}

const LinkList = ({ linkItems }: linkListProps) => {
  return (
    <div>
      <h1 className="font-semibold text-primary80 py-2">Links Rápidos</h1>
      {linkItems.map((item, index) => {
        return (
          <div
            key={index}
            className="min-w-[350px] w-[400px] md:flex md:flex-row p-2 gap-2"
          >
            <ListItem text={item.text} path={item.path} />
          </div>
        );
      })}
    </div>
  );
};


export default LinkList;