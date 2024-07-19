import React from 'react'

export default function LayoutImageProfileTitleMedium({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className="flex items-center gap-4">{children}</div>;
  }
