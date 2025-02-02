"use client";
import EyesPasswordIcon from "@/icons/EyesPasswordIcon";
import React, { useState } from "react";

export type InputProps = {
  label: string;
  name: string;
  borderRounded?: boolean;
  className?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  id,
  label,
  name,
  type,
  borderRounded,
  className,
  error,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`grid gap-0 min-h-10 ${className}`}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword && type === "password" ? "text" : type}
          {...props}
          className={`
            ${borderRounded ? "rounded-full" : "rounded-sm"} 
            w-full border-2 border-primary100 p-2.5 pr-10 focus:outline-2 focus:outline-secondary100
            ${error ? "border-red-500" : ""}
          `}
        />
        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
          >
            {!showPassword ? (
              <EyesPasswordIcon width={15} height={15} />
            ) : (
              <EyesPasswordIcon width={15} height={15} />
            )}
          </span>
        )}
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Input;
