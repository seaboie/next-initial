import React, { HTMLAttributes } from "react";

interface TextBaseBoldProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextBaseBold({ text, className }: TextBaseBoldProps) {
  return <div className={`text-base font-bold ${className}`}>{text}</div>;
}
