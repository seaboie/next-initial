import React from 'react'

export default function LayoutCard({children}: {children: React.ReactNode}) {
  return (
    <div  className='p-4 bg-white flex flex-col gap-4 rounded-lg shadow-md'>
        {children}
    </div>
  );
}
