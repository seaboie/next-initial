import React from 'react'

export default function TextExtraSmallHeadBold({text}: {text: string}) {
    return (
      <div className='text-xs font-bold'>
          {text}
      </div>
    );
  }
