import React, { HTMLAttributes } from 'react'

interface TextExtraLargeProps {
  text: string;
  className: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextExtraLarge({text, className}: TextExtraLargeProps) {
  return (
    <div className={`text-xl text-onSecondary ${className}`}>
      {text}
    </div>
  );
}