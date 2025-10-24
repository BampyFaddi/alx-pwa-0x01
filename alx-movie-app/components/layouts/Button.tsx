import React from "react";

interface ButtonProps {
  title: string;
  action: () => void | Promise<void>;
}

export default function Button({ title, action }: ButtonProps) {
  return (
    <button
      onClick={action}
      className="px-8 py-2 border-2 border-yellow-400 rounded-full font-semibold
                 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
    >
      {title}
    </button>
  );
}
