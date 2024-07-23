import React from "react";

export default function ButtonDefault({ text }: { text: string }) {
  return (
    <button className="p-2 bg-blue text-sm text-white font-bold rounded-lg cursor-pointer">
      {text}
    </button>
  );
}
