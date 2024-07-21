import React, { HTMLAttributes } from 'react'

interface TextTwoExtraLargeProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextTwoExtraLarge({text, className}: TextTwoExtraLargeProps) {
  return (
    <div className={`text-2xl text-onSecondary ${className}`}>
      {text}
    </div>
  );
}
