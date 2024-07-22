import React, { HTMLAttributes } from "react";

interface TextSmallBoldProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextSmallBold({
  text,
  className,
}: TextSmallBoldProps) {
  return <div className={`text-sm font-bold ${className}`}>{text}</div>;
}
