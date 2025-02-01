type textProps = {
    text: string

} & React.PropsWithChildren<React.ComponentPropsWithRef<"text">>


const Text:React.FC<textProps> = ({text, ...props}:textProps) =>{
    return (
      <text {...props} className="text-primary-100 ">
        {text}
      </text>
    );    
}

export default Text;