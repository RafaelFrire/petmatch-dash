import TextWithIcon, { textWithIconProps } from "../textWithIcon";

type contactProps = {
  items: textWithIconProps[];
};

const Contact = ({ items }: contactProps) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <TextWithIcon text={item.text} icon={item.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
