"use client";
import React from "react";

export type SelectOption = {
  value: string | number;
  label: string;
};

export type SelectInputProps = {
  label: string;
  name: string;
  options: SelectOption[];
  borderRounded?: boolean;
  className?: string;
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const SelectInput: React.FC<SelectInputProps> = ({
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
          w-full border-2 border-primary100 p-2.5 text-sm focus:outline-2 focus:outline-secondary100
          ${error ? "border-red-500" : ""}
        `}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default SelectInput;
