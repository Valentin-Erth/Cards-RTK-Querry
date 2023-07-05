import * as React from 'react'
import { useState } from 'react'

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

export const ArrowMui = () => {
  const [rotated, setRotated] = useState<boolean>(false)

  const handleClick = () => {
    setRotated(!rotated)
  }

  const rotationAngle = rotated ? 180 : 0

  return (
    <ArrowDropUpIcon
      sx={{ transform: `rotate(${rotationAngle}deg)`, color: '#fff' }}
      onClick={handleClick}
    />
  )
}
