import React from "react";

export default function ButtonDefault({ text }: { text: string }) {
  return (
    <button className="p-2 bg-blue text-white text-sm rounded-lg font-bold">
      {text}
    </button>
  );
}
