import React, { HTMLAttributes } from "react";

interface TextTwoExtraLargeMediumProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextTwoExtraLargeMedium({
  text,
  className,
}: TextTwoExtraLargeMediumProps) {
  return (
    <div className={`text-2xl text-onPrimary font-medium ${className}`}>
      {text}
    </div>
  );
}
