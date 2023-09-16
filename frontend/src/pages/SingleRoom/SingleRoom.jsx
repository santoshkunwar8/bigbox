import React, { useEffect, useState } from 'react'
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import  {BsThreeDotsVertical} from "react-icons/bs"
import styles from "./SingleRoom.module.css"
import RoomsAssets from '../../components/Rooms/RoomsAssetsBox/RoomsAssets'
import useFetch from '../../hooks/useFetch'
import {  Link, useParams } from 'react-router-dom'
import moment from "moment"
import { format } from 'timeago.js'
import { getRoomByIdApi } from '../../utils/api'
import { AiFillSetting } from 'react-icons/ai'

const SingleRoom = () => {
  const {id} = useParams()
  const {getFetch}  = useFetch();
  const [roomData,setRoomData] =useState(null)


  useEffect(()=>{
    getFetch(getRoomByIdApi,[id],(err,data)=>{
      


      if(err)return;
      setRoomData(data[0])

    })
  },[id])


  return (
    <div className={styles.singleRoom}>


        <div className={styles.roomHeader}>

         
                <div className={styles.headerLeft}>
                    <h1 className={styles.roomName}>{roomData?.name}</h1>
                    <div className={styles.headerLeftBottom}>

                    <p className={styles.infoText}>{moment(roomData?.createdAt).format('lll')}</p>
                    <p className={styles.infoText}>44 Files</p>
                    <p className={styles.infoText}>2 notes</p>
                    </div>
                </div>
        
            <div className={styles.headerRight}>

            <div className={styles.headerRightTop}>

                    <AvatarGroup size='sm' max={3}>
           
          {
            roomData?.collaborators?.map(cb=>            <Avatar key={cb?._id}  name={cb.username} src={cb.image} />
 )
          }
</AvatarGroup>
<Link to={"settings"}>
<AiFillSetting/>
</Link>
                </div>
                    <p className={styles.infoText}>Edited - {format(roomData?.updatedAt)}</p>



            </div>

        </div>
        <RoomsAssets/>

    </div>
  )
}

export default SingleRoom

// ctrl r  to redo
// u to undo
