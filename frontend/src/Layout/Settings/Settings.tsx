import React, { ChangeEvent, useEffect, useState } from 'react'
import Header from '../Header/Header'
import styles from "./Setting.module.css"
import { useParams } from 'react-router-dom'
import { getRoomByIdApi, updateRoomApi } from '../../utils/api'
import useFetch from '../../hooks/useFetch'
import { RoomType, Usertype } from '../../utils/Types'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../redux'
import { useDispatch } from 'react-redux'
import { ChangeVisibility } from '../modal/Settings/ChangeVisibilty/ChangeVisbility'
import { DeleteRoomModal } from '../modal/Settings/DeleteRoom/DeleteRoom'
import { TransferOwnerShip } from '../modal/Settings/TransferOwnership/TransferOwnerShip'
import CollaboratorItem from '../../components/CollaboratorItem/CollaboratorItem'
type settingDataType={
    name:string,
    isPublic:boolean,
    user:string
}
const Settings = () => {
    const {id} = useParams()
    const {getFetch}  =useFetch()
    const [roomData,setRoomData] =useState<RoomType|null>(null)
    const [roomName,setRoomName] =useState("");
    const dispatch  = useDispatch()
    const {RefreshAction} = bindActionCreators(actionCreators,dispatch)
    const [filteredCollab,setFilteredCollab]=useState<Usertype[]>([])
    const [searchCollabName,setSearchCollabName] =useState("")
    const [settingData,setSettingData]=useState<settingDataType>({
        isPublic:false, 
        user:"",
        name:""
    })
    

    useEffect(()=>{
        getFetch(getRoomByIdApi,[id],(err,data)=>{
            if(err)return;
  
            setRoomData(data[0])
   
        })
    },[id])
    
    useEffect(()=>{
        if(roomData)
        setRoomName(roomData?.name)
    },[roomData])

    useEffect(()=>{
        const filtered  = roomData?.collaborators?.filter(u=>u.username.startsWith(searchCollabName));
        if(filtered){
            setFilteredCollab(filtered)
        }
    },[searchCollabName])


    useEffect(()=>{
        if(roomData){
            const {name,isPublic,user:{_id}} = roomData;
            setSettingData({
                name,
                isPublic,
                user:_id
            })
        }
    },[roomData])

    const handleRenameRoom=async()=>{
    if(!id)return;
    try {
        await updateRoomApi(id,{name:roomName})
        RefreshAction()
        alert("succesffully renamed")
        } catch (error) {
                console.log(error)
        }

    }
    const handleSearchCollabName=(e:ChangeEvent<HTMLInputElement>)=>{

        setSearchCollabName(e.target.value)

    }
   
    return (
        <div className={styles.settings}>
            <Header name={"Settings"} img={"https://img.icons8.com/plasticine/100/null/gear.png"}>

            </Header>
            <div className={styles.setting_content}>

                <div className={styles.setting_section}>
                    <h1 className={styles.settingTopic}>General </h1>
                    <div className={styles.hr}></div>
                    <div className={styles.settingContent}>

        <div className={styles.singleItem}>


                    <p>Room name</p>
                    <div className={styles.inputBox}>
                    
                    <input type="text" placeholder='' onChange={(e:ChangeEvent<HTMLInputElement>)=>setRoomName(e.target.value)} value={roomName} />
                    <button className={styles.renameButton} onClick={handleRenameRoom}> 
                        Rename
                    </button>
                    </div>
                </div>

                    </div>
        </div>
                    
                <div className={styles.setting_section}>
                    <h1 className={styles.settingTopic}>Manage Access </h1>
                    <div className={styles.hr}></div>
                    <div className={styles.settingContent}>

                        <div className={styles.searchCollaborators}>
                            <input  onChange={handleSearchCollabName} className={styles.searchCollaboratorsInput} type="text" placeholder='search collaborator'/>
                        </div>
                        <div className={styles.collaboratorsList}>
                            {
                                roomData &&  searchCollabName.length > 0 ? filteredCollab.map(u=>(
                               

                                        <CollaboratorItem   roomData={roomData} user={u} key={u._id}/>

                                )): roomData?.collaborators.map(user=> <CollaboratorItem  roomData={roomData} user={user} key={user._id}/>)
                            }
                                   
                  
                        </div>
                    </div>  
        </div>
              
                <div className={styles.setting_section}>
                    <h1 className={styles.settingTopic}>Danger Zone </h1>
                    <div className={styles.hr}></div>
                    <div className={styles.settingContent}>

                        <div className={styles.dangerItem}>
                            <div className={styles.dangerItemLeft}>
                                <p className={styles.dangerItemHeader}>Change Room visibility</p>
                                <p >This room is currenlty public</p>
                            </div>
                            <ChangeVisibility roomData={roomData}>
                                
                            <button>Change visibility</button>
                            </ChangeVisibility>
                        </div>
                          {/* <div className={styles.dangerItem}>
                            <div className={styles.dangerItemLeft}>
                                <p className={styles.dangerItemHeader}>Transfer ownership</p>
                                <p >Transfer this room  to another user or to an organization .</p>
                            </div>
                            <TransferOwnerShip roomData={roomData}>
                            <button>Transfer</button>
                            </TransferOwnerShip>
                        </div> */}
                        
                         <div className={styles.dangerItem}>
                            <div className={styles.dangerItemLeft}>
                                <p className={styles.dangerItemHeader}>Delete this room </p>
                                <p >Once you delete a room, there is no going back. Please be certain.</p>
                            </div>
                            <DeleteRoomModal roomData={roomData}>

                            <button>Delete Room</button>
                            </DeleteRoomModal>
                        </div>


                    </div>  
        </div>
             


           
            </div>
        </div>
    )
}

export default Settings

