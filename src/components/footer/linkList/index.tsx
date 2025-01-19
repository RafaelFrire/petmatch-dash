import ListItem, { listItemProps } from "../ListItem";

type linkListProps = {
    linkItems: listItemProps[]
}

const LinkList = ({ linkItems }: linkListProps) => {
  return (
    <div>
        {linkItems.map((item, index) =>{
            return (
              <div key={index} className="min-w-[350px] max-w-sm">
                <ListItem text={item.text} path={item.path} />
              </div>
            );
        })}
    </div>
  )
};


export default LinkList;