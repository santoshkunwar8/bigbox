import React from 'react'
import { RoomListWrapper } from './RoomLIst.styles'
import { useNavigate } from 'react-router-dom'
import {format} from "timeago.js"

const RoomList = ({room}) => {
    const navigate = useNavigate()
    const handleNavigate =()=>{
        if(room?._id)
        navigate(`/home/rooms/${room?._id}/rooms`)
    };



  return (
            <RoomListWrapper className={"room_item"} onClick={handleNavigate}>
                                    <div className={"room_title_box"}>
                                        <img width={"18px"} src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                                        <div className={"room_title"}>


                                            <p className={"room_name"}>{room.name}</p>
                                            <span className={` ${"room_type"} ${"global_room"}`}>public</span>
                                        </div>
                                    </div>

                                    <div className={"user_connected"}>
                                        <span>{room.collaborators?.length} users connected</span>
                                    </div>
                                    <div className={"updated"}>
                                        <p>last updated :</p>
                                        <span>{format(room.updatedAt)}</span>

                                    </div>
                                </RoomListWrapper>
                         
  )
}

export default RoomList