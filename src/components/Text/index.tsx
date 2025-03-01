type textProps = {
    text: string

} & React.PropsWithChildren<React.ComponentPropsWithRef<"p">>


const Text:React.FC<textProps> = ({text, ...props}:textProps) =>{
    return (
      <p {...props} className="text-primary100 ">
        {text}
      </p>
    );    
}

export default Text;