import React from "react";

interface ButtonProps {
  title: string;
  action: () => void | Promise<unknown>;
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
    >
      {title}
    </button>
  );
};

export default Button;
