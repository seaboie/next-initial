import React from "react";

interface ButtonLearnMoreProps {
  text: string;
  onClick: () => void;
}

export default function ButtonLearnMore({ text, onClick }: ButtonLearnMoreProps) {
  return (
    <button className="p-2 bg-gray text-gray-light text-sm font-medium rounded-lg cursor-pointer" onClick={onclick}>
      {text}
    </button>
  );
}
