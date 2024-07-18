import React from 'react'

export default function TextExtraSmallHead({text}: {text: string}) {
  return (
    <div className='text-xs text-gray-500'>
        {text}
    </div>
  );
}
