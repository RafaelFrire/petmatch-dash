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

const InputCustom: React.FC<InputProps> = ({
  id,
  label,
  name,
  type = "text",
  borderRounded,
  className = "",
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || name;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`relative z-0 w-full mb-5 group ${className}`}>
      <input
        id={inputId}
        name={name}
        type={showPassword && type === "password" ? "text" : type}
        placeholder=" "
        className={`
          block py-2.5 px-0 w-full text-sm bg-transparent appearance-none 
          border-0 border-b-2 peer
          text-gray-900 dark:text-white
          border-gray-300 dark:border-gray-600
          focus:outline-none focus:ring-0 focus:border-blue-600 dark:focus:border-blue-500
          ${borderRounded ? "rounded-full" : ""}
          ${error ? "border-red-500 focus:border-red-500 dark:focus:border-red-500" : ""}
        `}
        onFocus={(e) => {
          props.onFocus?.(e); // mantém o onFocus que vier nos props
        }}
        {...props}
      />
      <label
        htmlFor={inputId}
        className={`
          absolute text-sm text-gray-500 dark:text-gray-400 
          duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6
          peer-focus:text-blue-600 peer-focus:dark:text-blue-500
          ${error ? "peer-focus:text-red-500 dark:peer-focus:text-red-500" : ""}
        `}
      >
        {label}
      </label>

      {type === "password" && (
        <span
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-2 flex items-center cursor-pointer text-gray-500"
        >
          <EyesPasswordIcon width={15} height={15} />
        </span>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputCustom;
