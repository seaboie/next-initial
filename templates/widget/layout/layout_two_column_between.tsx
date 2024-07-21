import React, { ReactNode } from 'react'

export default function LayoutTwoColumnBetween({children}: {children: React.ReactNode}) {
  return (
    <div className='flex items-center justify-between'>
        {children}
    </div>
  );
}
