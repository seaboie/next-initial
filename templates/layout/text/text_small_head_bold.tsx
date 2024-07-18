import React from 'react'

export default function TextSmallHeadBold({text}: {text: string}) {
    return (
      <div className='text-sm font-bold'>
          {text}
      </div>
    );
  }
