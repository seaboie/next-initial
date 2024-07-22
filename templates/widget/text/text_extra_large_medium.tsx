import React, { HTMLAttributes } from "react";

interface TextExtraLargeMediumProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextExtraLargeMedium({
  text,
  className,
}: TextExtraLargeMediumProps) {
  return (
    <div className={`text-xl text-onPrimary font-medium ${className}`}>
      {text}
    </div>
  );
}
