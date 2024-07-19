import React from 'react'

export default function TextExtraLargeSemiBold({text}: {text: string}) {
    return (
      <div className='text-xl font-semibold text-gray-700'>
          {text}
      </div>
    );
  }
