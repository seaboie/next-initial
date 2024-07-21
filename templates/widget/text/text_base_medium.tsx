import React, { HTMLAttributes } from 'react';

interface TextBaseMediumProps {
    text: string;
    className: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextBaseMedium({text, className}: TextBaseMediumProps) {
    return (
      <div className={`text-base text-onPrimary font-medium ${className}`}>
        {text}
      </div>
    );
  }