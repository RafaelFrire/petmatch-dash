import { ReactNode } from "react";

type TextWithIconProps = {
    text: string;
    icon: ReactNode;
}


const TextWithIcon:React.FC<TextWithIconProps> = ({text, icon}) =>{
    return(
        <div className="flex items-center">
            {icon}
            <h1 className="text-xl">{text}</h1>
        </div>
    )
}

export default TextWithIcon;