import React from "react";

export default function ButtonLearnMore({ text }: { text: string }) {
  return (
    <button className="p-2 bg-gray text-gray-light text-sm font-medium rounded-lg cursor-pointer">
      {text}
    </button>
  );
}
