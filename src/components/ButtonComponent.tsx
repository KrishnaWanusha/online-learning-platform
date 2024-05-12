import React from "react";

type Props = {
  children: React.ReactNode;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
};

const ButtonComponent = ({ children, color, hoverColor, onClick }: Props) => {
  return (
    <button
      className={`rounded-md ${color ?? "bg-teal-500"} px-10 py-2 ${
        hoverColor ?? "hover:bg-teal-600"
      } transition duration-500 hover:text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
