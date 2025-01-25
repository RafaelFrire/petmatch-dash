import { ReactNode } from "react";

export type propsLink = {
    path: string;
    icon: ReactNode
}

const Link:React.FC<propsLink> = ({ path, icon }) => {
    return (
        <a href={path}>
            <div>{icon}</div>
        </a>
    );
};


export default Link;