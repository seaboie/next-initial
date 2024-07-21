import React, { HTMLAttributes } from 'react'

interface TextExtraSmallBoldProps {
  text: string;
  className: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextExtraSmallBold({text, className}: TextExtraSmallBoldProps) {
    return (
      <div className={`text-xs font-bold ${className}`}>
        {text}
      </div>
    );
  }
