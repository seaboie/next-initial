import React from "react";

export default function ButtonLearnMore({ text }: { text: string }) {
  return (
    <button className="p-2 bg-gray-200 text-gray-500 text-sm rounded-lg font-bold">
      {text}
    </button>
  );
}
