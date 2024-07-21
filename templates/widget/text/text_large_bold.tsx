import React, { HTMLAttributes } from 'react';

interface TextLargeBoldProps {
    text: string;
    className: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextLargeBold({text, className}: TextLargeBoldProps) {
    return (
      <div className={`text-lg font-bold ${className}`}>
        {text}
      </div>
    );
  }