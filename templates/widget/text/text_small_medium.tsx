import React, { HTMLAttributes } from 'react';

interface TextSmallMediumProps {
    text: string;
    className: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextSmallMedium({text, className}: TextSmallMediumProps) {
    return (
      <div className={`text-sm text-onPrimary font-medium ${className}`}>
        {text}
      </div>
    );
  }
