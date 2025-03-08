import React, {FunctionComponent} from 'react'


interface ModalButtonProps {
    type: "submit" | "button";
    color: "primary" | "secondary";
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: FunctionComponent<ModalButtonProps> = ({ type, color, children, onClick }) => {
    const baseClass = "flex-1 p-3 text-white rounded-xl transition-colors";
    const colorClass = color === "primary"
      ? "bg-indigo-600 hover:bg-indigo-700"
      : "bg-indigo-800/50 hover:bg-indigo-700/50";

    return (
      <button type={type} onClick={onClick} className={`${baseClass} ${colorClass}`}>
          {children}
      </button>
    );
};