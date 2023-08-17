import React from 'react'

import {ReactComponent as Lion} from '../../assets/Divider/lions.svg'

const CustomDivider = () => {
  return (
    <div className="relative bg-gray-900">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-primary-500" />
    </div>
    <div className="relative flex justify-center">
      <span className="bg-gray-900 px-2 text-primary-500">
        <Lion className="h-13 w-12 text-primary-500 fill-primary-500" aria-hidden="true" />
      </span>
    </div>
  </div>
  )
}

export default CustomDivider