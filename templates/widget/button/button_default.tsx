import React from "react";

interface ButtonDefaultProps {
  text: string;
  onClick: () => void;
}

export default function ButtonDefault({ text, onClick }: ButtonDefaultProps) {
  return (
    <button className="p-2 bg-blue text-sm text-white font-bold rounded-lg cursor-pointer" onClick={onClick} >
      {text}
    </button>
  );
}
