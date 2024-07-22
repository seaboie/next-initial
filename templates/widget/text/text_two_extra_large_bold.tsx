import React, { HTMLAttributes } from "react";

interface TextTwoExtraLargeBoldProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextTwoExtraLargeBold({
  text,
  className,
}: TextTwoExtraLargeBoldProps) {
  return <div className={`text-2xl font-bold ${className}`}>{text}</div>;
}
