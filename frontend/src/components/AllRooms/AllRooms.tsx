import React, { useEffect, useState } from 'react'
import { AllRoomsWrapper } from './AllRooms.styles'
import { RoomType } from '../../utils/Types'
import { getAllPublicRoomApi } from '../../utils/api'
import Header from '../../Layout/Header/Header'
import RoomItem from '../Rooms/RoomItem/RoomItem'
import { CreateRoomModal } from '../../Layout/modal/CreateRoom/CreateRoomModal'
import { MdCreateNewFolder } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { State } from '../../redux/Reducers'

const AllRooms = () => {
    const {user} =useSelector((state:State)=>state.user)
    const [ allRooms,setAllRooms] =useState<RoomType[] | null>(null)

    useEffect(()=>{
        getAllPublic()
    },[])
    const getAllPublic=async()=>{
        try {
           const {data,status} =  await getAllPublicRoomApi();
           if(status===200){
            setAllRooms(data.message)
           }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <AllRoomsWrapper>
         <Header img={"https://img.icons8.com/officel/40/null/slack.png"} name={"Public Rooms"} >
                

  {   user && <CreateRoomModal>

                <button className={"create_room"}>
                    <MdCreateNewFolder size={"1.62rem"} className={"create_btn"} />   Create
                </button>
                </CreateRoomModal>}
           
            </Header>
            <div className="allRoomsWrapper">
                {
                    allRooms && allRooms.map(r=><RoomItem room={r} key={r?._id}/>)
                }
            </div>
    </AllRoomsWrapper>
  )
}

export default AllRooms