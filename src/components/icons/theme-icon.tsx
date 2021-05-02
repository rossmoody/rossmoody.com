import React from 'react'
import { useToken } from '@chakra-ui/react'

export const ThemeIcon = () => {
  const primaryColor = useToken('colors', 'primary')
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm8-12a8 8 0 01-8 8V4a8 8 0 018 8z"
        fill={primaryColor}
      />
    </svg>
  )
}
