import React from 'react'

export default function TextBaseHead({text}: {text: string}) {
  return (
    <div className='text-base font-semibold text-gray-500'>
        {text}
    </div>
  );
}
