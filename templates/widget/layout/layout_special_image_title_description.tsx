import React from "react";

export default function LayoutSpecialImageTitleDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
      {children}
    </div>
  );
}
