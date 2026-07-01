import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="relative">
      {label && <label className="block text-gold-100 text-sm font-bold mb-1">{label}</label>}
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline
          bg-gray-700 border-gray-600 focus:border-gold-500 transition-colors duration-200 ease-in-out
          ${className}`}
        {...props}
      />
    </div>
  );
};
