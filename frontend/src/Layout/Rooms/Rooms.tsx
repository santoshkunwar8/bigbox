import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import styles from  "./Rooms.module.css"
import { MdCreateNewFolder } from "react-icons/md"
import useFetch from '../../hooks/useFetch'
import RoomItem from '../../components/Rooms/RoomItem/RoomItem'
import { CreateRoomModal } from '../modal/CreateRoom/CreateRoomModal'
import { getUserRoomApi } from '../../utils/api'
import {useSelector} from "react-redux"
import {State} from '../../redux/Reducers/index'

const Rooms = () => {

    const {user}  = useSelector((state)=>state.user);
    const [allRoom,setAllRooms]=useState(null)
    const {refresh} = useSelector((state:State)=>state.other)


    const {getFetch} =useFetch()

    useEffect(()=>{
    if(!user)return;
      const userId = user._id; 
        getFetch(getUserRoomApi,[userId],(err,data)=>{
            if(err)return;
            setAllRooms(data)
        })
    },[refresh,user])


    return (
        <div className={styles.rooms}>
            <Header img={"https://img.icons8.com/officel/40/null/slack.png"} name={"Created Rooms"} >
                
                <CreateRoomModal>

                <button className={styles.create_room}>

                    <MdCreateNewFolder size={"1.62rem"} className={styles.create_btn} />   Create

                </button>
                </CreateRoomModal>
            </Header>
            <div className={styles.room_container}>
                {
                    allRoom ? allRoom.map(room=><RoomItem key={room._id} room={room}/>) :"loading"
                }
              
              

            </div>
        </div>
    )
}

export default Rooms