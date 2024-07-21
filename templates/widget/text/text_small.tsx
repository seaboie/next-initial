import React, { HTMLAttributes } from 'react'

interface TextSmallProps {
  text: string;
  className: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextSmall({text, className}: TextSmallProps) {
  return (
    <div className={`text-sm text-onSecondary ${className}`}>
      {text}
    </div>
  );
}
