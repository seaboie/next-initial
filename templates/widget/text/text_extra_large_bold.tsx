import React, { HTMLAttributes } from 'react';

interface TextExtraLargeBoldProps {
    text: string;
    className: HTMLAttributes<HTMLDivElement> | string | undefined;
}

export default function TextExtraLargeBold({text, className}: TextExtraLargeBoldProps) {
    return (
      <div className={`text-xl font-bold ${className}`}>
        {text}
      </div>
    );
  }