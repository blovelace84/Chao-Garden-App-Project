"use client";

import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "green" | "pink" | "yellow" | "blue";
};

const colorStyles = {
  green: "bg-green-300 hover:bg-green-400",
  pink: "bg-pink-300  hover:bg-pink-400",
  yellow: "bg-yellow-300 hover:bg-yellow-400",
  blue: "bg-blue-300 hover:bg-blue-400",
};
export default function Button({
  children,
  onClick,
  color = "green",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${colorStyles[color]} 
                w-full 
                transition 
                rounded-xl 
                p-4 
                font-semibold 
                shadow`}
    >
      {children}
    </button>
  );
}
