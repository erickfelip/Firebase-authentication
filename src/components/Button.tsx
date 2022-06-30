import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick: any;
  type: any;
  disabled?: boolean;
}

export const Button = ({
  text,
  className,
  onClick,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`button${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
