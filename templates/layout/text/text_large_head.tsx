import React from 'react'

export default function TextLargeHead({text}: {text: string}) {
  return (
    <div className='text-lg font-semibold text-gray-500'>
        {text}
    </div>
  );
}
