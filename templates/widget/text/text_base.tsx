import React, { HTMLAttributes } from "react";

interface TextBaseProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextBase({ text, className }: TextBaseProps) {
  return (
    <div className={`text-base text-onSecondary ${className}`}>{text}</div>
  );
}
