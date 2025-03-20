import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
    <button className={`px-4 py-2 rounded-lg ${className}`} {...props}>{children}</button>
  );


export default Button