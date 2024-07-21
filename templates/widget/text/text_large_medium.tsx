import React, { HTMLAttributes } from 'react';

interface TextLargeMediumProps {
    text: string;
    className: HTMLAttributes<HTMLDivElement> | string | undefined;
}
export default function TextLargeMedium({text, className}: TextLargeMediumProps) {
    return (
      <div className={`text-lg text-onPrimary font-medium ${className}`}>
        {text}
      </div>
    );
  }