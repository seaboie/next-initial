import React, { HTMLAttributes } from "react";

interface TextSmallHeadBoldProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextSmallHeadBold({
  text,
  className,
}: TextSmallHeadBoldProps) {
  return <div className={`text-sm font-bold ${className}`}>{text}</div>;
}
