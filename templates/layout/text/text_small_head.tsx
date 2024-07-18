import React from 'react'

export default function TextSmallHead({text}: {text: string}) {
  return (
    <div className='text-sm font-medium text-gray-500'>
        {text}
    </div>
  );
}
