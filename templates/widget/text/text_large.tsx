import React, { HTMLAttributes } from "react";

interface TextLargeProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextLarge({ text, className }: TextLargeProps) {
  return <div className={`text-lg text-onSecondary ${className}`}>{text}</div>;
}
