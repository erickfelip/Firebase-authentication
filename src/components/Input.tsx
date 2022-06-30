import React from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: any;
  name: string;
  onChange: any;
}

export const Input = ({
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  label,
}: InputProps) => {
  return (
    <div className="field">
      <div className="control">
        <label htmlFor={name}>{label}</label>
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          id={name}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};
