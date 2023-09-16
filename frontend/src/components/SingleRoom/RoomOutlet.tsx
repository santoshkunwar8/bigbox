import React from 'react'
import { RoomOutletWrapper } from './RoomOutlet.styles'
import { Outlet } from 'react-router-dom'

const RoomOutlet = () => {
  return (
    
    <RoomOutletWrapper>
        <Outlet/>
    </RoomOutletWrapper>
    
  )
}

export default RoomOutlet