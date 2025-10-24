import React from "react";

interface ButtonProps {
  title: string;
  action: () => void | Promise<unknown>;
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      {title}
    </button>
  );
};

export default Button;