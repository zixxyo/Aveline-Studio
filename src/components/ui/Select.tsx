import React from "react";
import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className, ...props }) => {
  return (
    <div className="relative">
      {label && <label className="block text-gold-100 text-sm font-bold mb-1">{label}</label>}
      <select
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline
          bg-gray-700 border-gray-600 focus:border-gold-500 transition-colors duration-200 ease-in-out
          ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
