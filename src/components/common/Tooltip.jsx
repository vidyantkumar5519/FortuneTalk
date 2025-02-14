import React, { useState } from 'react'

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false)

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 translate-y-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 -translate-x-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 translate-x-2'
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          className={`
            absolute z-50 
            bg-gray-800 text-white 
            text-xs 
            px-2 py-1 
            rounded 
            whitespace-nowrap
            ${positionClasses[position]}
          `}
        >
          {content}
        </div>
      )}
    </div>
  )
}

export default Tooltip
