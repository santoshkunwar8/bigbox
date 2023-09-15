import React, { ChangeEvent, useEffect, useState } from 'react'
import Header from '../Header/Header'
import styles from "./Invite.module.css"
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { addUserAsCollaboratorApi, getUserRoomApi, searchUserByNameApi } from '../../utils/api';
import { State } from '../../redux/Reducers';
import SearachUserPopover from '../Popover/SearchUserPopover/SearachUserPopover';
import { Usertype } from '../../utils/Types';
import SearchSelectedUsers from '../../components/User/SearchSelectedUsers/SearchSelectedUsers';

const Invite = () => {

     const userId = "64f7e688fea8a219d4d481eb"
    const [allRoom,setAllRooms]=useState(null)
    const [userInput,setUserInput] = useState("")
    const [searchedUsers,setSearchedUsers] =useState<Usertype[]>([])
    const [selectedUsers,setSelectedUsers] = useState<Usertype|null >(null)
    const {postFetch}  = useFetch()
    const [selectedRoom,setSelectedRoom] =useState("")
    const {refresh} = useSelector((state:State)=>state.other)


    const {getFetch} =useFetch();
    const currentUser = "64f7e688fea8a219d4d481eb";
    useEffect(()=>{
        getFetch(getUserRoomApi,[userId],(err,data)=>{
            if(err)return;
            setAllRooms(data)
        })
    },[refresh])

    
       useEffect(()=>{
      
      
      getFetch(searchUserByNameApi,[userInput],(err,data)=>{
        if(err)return;
        setSearchedUsers(data)
      })
      
    },[userInput])
    
    const handleChangeRoom=(e:ChangeEvent<HTMLSelectElement>)=>{
        setSelectedRoom(e.target.value)
    }
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{setUserInput(e.target.value)}
      
    const handleSelectUsers=(selected:Usertype)=>{
        setSelectedUsers(selected)
    }

    const handleRemoveSelected=(user:Usertype)=>{

        setSelectedUsers(null)

    }
    
    const handleInviteUser=async()=>{
        if(!selectedRoom || !selectedUsers?._id)return;
        try {
           const {data,status}   =await addUserAsCollaboratorApi(selectedRoom,selectedUsers?._id)
            if(status===200){
                alert("successfull")
                setSelectedUsers(null);
                setSelectedRoom("")
                setUserInput("")
            }else{
                throw new Error(data.message)
            }


        } catch (error) {
                console.log(error)
        }
    }

    return (
        <div className={styles.invite}>
            <Header img={"https://img.icons8.com/external-bearicons-outline-color-bearicons/64/null/external-Add-email-bearicons-outline-color-bearicons.png"} name="Invitations"> </Header>
            <div className={styles.invitation_content}>
                <div className={styles.invitation_item}>

                    <p>Select the room in which you want other  users to invite . If you have not created any room by your own  then  the default one is selected .  </p>
                    <select className={styles.room_select} name="room" onChange={handleChangeRoom} >
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
                    <input placeholder='username or email ...'  value={ selectedUsers ? selectedUsers.username : userInput} className={styles.user_search_input} type="text"  onChange={handleChange}/>
                 {
                   ( userInput.length > 0 &&  !selectedUsers)&&
                   <SearachUserPopover searchedUsers={searchedUsers} handleSelectCollab={handleSelectUsers}>
                        <div></div>
                    </SearachUserPopover>
                } 
                {
                    selectedUsers &&
              <div className={styles.selectedusers}> 
              <SearchSelectedUsers handleRemoveSelected={handleRemoveSelected} selectedUser={selectedUsers}  />
                 </div>
                }
                </div>
           
                <div className={styles.invite_bottom_btns}>

                    <button className={styles.cancelBtn}>Cancel</button>
                    <button className={styles.inviteBtn} onClick={handleInviteUser}>Invite</button>

                </div>
            </div>
        </div>
    )
}

export default Invite

                {/* <div className={styles.invitation_item}>

                    <p> Specify how long you want to give user access to this room. </p>
                    <input className={styles.access_time} type="number" name="" id="" placeholder='type number of days' />
                </div> */}