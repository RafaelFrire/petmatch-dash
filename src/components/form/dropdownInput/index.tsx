"use client";
import React from "react";

type Option = {
  label: string;
  value: string | number | boolean;
};

export type DropdownInputProps = {
  label: string;
  name: string;
  options: Option[];
  borderRounded?: boolean;
  className?: string;
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const DropdownInput: React.FC<DropdownInputProps> = ({
  id,
  label,
  name,
  options,
  borderRounded,
  className,
  error,
  ...props
}) => {
  return (
    <div className={`grid gap-0 min-h-10 ${className}`}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <select
        id={id || name}
        name={name}
        {...props}
        className={`
          ${borderRounded ? "rounded-full" : "rounded-sm"}
          w-full border-2 border-primary100 p-2.5 focus:outline-2 focus:outline-secondary100
          ${error ? "border-red-500" : ""}
        `}
      >
        <option value="">Selecione</option>
        {options.map((opt, index) => (
          <option key={index} value={String(opt.value)}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default DropdownInput;
