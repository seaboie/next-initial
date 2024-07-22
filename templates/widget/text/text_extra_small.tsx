import React, { HTMLAttributes } from "react";

interface TextExtraSmallHeadProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextExtraSmall({
  text,
  className,
}: TextExtraSmallHeadProps) {
  return <div className={`text-xs text-onSecondary ${className}`}>{text}</div>;
}
