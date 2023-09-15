import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import styles from "./Invite.module.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { getUserRoomApi } from '../../utils/api';
import { State } from '../../redux/Reducers';

const Invite = () => {

     const userId = "64f7e688fea8a219d4d481eb"
    const [allRoom,setAllRooms]=useState(null)
    const {refresh} = useSelector((state:State)=>state.other)


    const {getFetch} =useFetch()

    useEffect(()=>{
        getFetch(getUserRoomApi,[userId],(err,data)=>{
            if(err)return;
            setAllRooms(data)
        })
    },[refresh])


    return (
        <div className={styles.invite}>
            <Header img={"https://img.icons8.com/external-bearicons-outline-color-bearicons/64/null/external-Add-email-bearicons-outline-color-bearicons.png"} name="Invitations"> </Header>
            <div className={styles.invitation_content}>
                <div className={styles.invitation_item}>

                    <p>Select the room in which you want other  users to invite . If you have not created any room by your own  then  the default one is selected .  </p>
                    <select className={styles.room_select} name="room" >
                        <option value="Rooms" selected >Rooms</option>
                        {
                            allRoom && allRoom.map(room=>(

                                <option value={room?._id}>{room?.name}</option>
                            ))
                        }
                       
                    </select>
                </div>
                <div className={styles.invitation_item}>

                    <p>Search for the user whom you want to invite to the Room for collaboration . You can search user by username or  email . </p>
                    <input placeholder='username or email ...' className={styles.user_search_input} type="text" name="" id="" />
                </div>
                <div className={styles.invitation_item}>

                    <p> Specify how long you want to give user access to this room. </p>
                    <input className={styles.access_time} type="number" name="" id="" placeholder='type number of days' />
                    {/* <Calendar selectRange={true} className={styles.invitation_calender} /> */}
                </div>
                <div className={styles.invite_bottom_btns}>

                    <button className={styles.cancelBtn}>Cancel</button>
                    <button className={styles.inviteBtn}>Invite</button>

                </div>
            </div>
        </div>
    )
}

export default Invite