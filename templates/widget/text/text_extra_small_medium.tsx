import React, { HTMLAttributes } from "react";

interface TextExtraSmallMediumProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextExtraSmallMedium({
  text,
  className,
}: TextExtraSmallMediumProps) {
  return (
    <div className={`text-xs text-onPrimary font-medium ${className}`}>
      {text}
    </div>
  );
}
