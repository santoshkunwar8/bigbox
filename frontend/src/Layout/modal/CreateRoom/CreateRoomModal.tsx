import {
    Modal,
    ModalOverlay,
    ModalContent,

    useDisclosure,
 

  } from '@chakra-ui/react'
  import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { CreateRoomModalWrapper } from './CreateRoomModal.styles';
import SearachUserPopover from '../../Popover/SearchUserPopover/SearachUserPopover';
import { Usertype } from '../../../utils/Types';
import useFetch from '../../../hooks/useFetch';
import { createRoomApi, searchUserByNameApi } from '../../../utils/api';
import SearchSelectedUsers from '../../../components/User/SearchSelectedUsers/SearchSelectedUsers';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { ConstantVar } from "../../../utils/Enums";
import { State } from '../../../redux/Reducers';
import useAlert from '../../../hooks/useAlert';
  type CreateRoomModalProps={
    children:React.ReactNode,
  }
  type debatePayloadType={
    name:string, 
    collaborators:string[],
    isPublic:boolean
  }
  export const  CreateRoomModal:React.FC<CreateRoomModalProps>=({children})=> {


        const {user}  = useSelector((state:State)=>state.user);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userInput,setUserInput] =useState("");
    const [ selelctedCollaborator,setSelectedCollaborator]=useState<Usertype[]>([]);
    const [searchedUsers,setSearchedUsers] =useState<Usertype[]>([])
    const {getFetch,postFetch} = useFetch();
    const [filterdCollaborator,setFilteredCollaborator]=useState<Usertype[]>([])
    const dispatch =useDispatch()
    const {RefreshAction} = bindActionCreators(actionCreators,dispatch)
    const [accessType,setAccessType] = useState(ConstantVar.PRIVATE)
    const {alert} = useAlert()
    const [debatePayload,setDebatePayload]=useState<debatePayloadType>({
      name:"",
      collaborators:[],
      isPublic:false
    })
    useEffect(()=>{
      
      
      getFetch(searchUserByNameApi,[userInput,user?._id],(err,data)=>{
        if(err)return;
        setSearchedUsers(data)
      })
      
    },[userInput])
    
    useEffect(()=>{
      setDebatePayload(prev=>({...prev,collaborators:selelctedCollaborator.map(c=>c._id)}))
    },[selelctedCollaborator])
    
    
    
    useEffect(()=>{
      
      const filtered =  searchedUsers.filter(user => {
        
        return !selelctedCollaborator.some(selectedUser => selectedUser._id === user._id);
      });
      
      setFilteredCollaborator(filtered)
    },[selelctedCollaborator,searchedUsers])
    
    const handleAccessChange=(type:ConstantVar.PRIVATE| ConstantVar.PUBLIC)=>{
  setAccessType(type)
  setDebatePayload(prev=>({
    ...prev,isPublic:type ===ConstantVar.PUBLIC
  }))
}
    const handleRemoveSelected=(currUser:Usertype)=>{
      
      setSelectedCollaborator(prev=>{
        return prev.filter(user=>user._id !== currUser._id)
      })



    }

    const handleSelectCollaborator=(selected:Usertype)=>{
    
      setSelectedCollaborator(prev=>{
        let doesExist =  prev.some(user=>user._id === selected._id);
        if(doesExist){
          return prev
        }else{
          return [...prev, selected]
        }
      })
    }

    const handleRoomInputChange=(e:ChangeEvent<HTMLInputElement>)=>{ 
      const {value} = e.target;
      setDebatePayload(prev=>({...prev,name:value}))
    }
    const handleCreateRoom=(e:SyntheticEvent)=>{
      e.preventDefault();

      const payload = {
        ...debatePayload,
        collaborators:[...debatePayload.collaborators,user?._id]
      };

    try {

      postFetch(createRoomApi,{...payload,user:user?._id},(err,data)=>{
        if(err)return ;
        alert("success","Room created successfully")
        onClose()
        RefreshAction()
      })
      
        console.log(debatePayload)
    } catch (error) {
          alert("error","Failed to create room")
        console.log(error)
    }


    }


    return (
      <>
        <span onClick={onOpen}>{children}</span>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <CreateRoomModalWrapper>

                <div className="createRoomHeader">
                    <h1 className='headerText'>Create Room </h1>
                </div>

                            <div className="accessBox">

                      <div className={`accessItem ${accessType===ConstantVar.PRIVATE ? "activeItem":""}  `} onClick={()=>handleAccessChange(ConstantVar.PRIVATE)}>
                          <img width={"30px"} src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-private-key-privacy-flaticons-flat-flat-icons-2.png" />
                         <p>Private</p>
                      </div>
                      <div className={`accessItem ${accessType===ConstantVar.PUBLIC ? "activeItem":""}  `} onClick={()=>handleAccessChange(ConstantVar.PUBLIC)}>
                          <img width={"30px"} src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/null/external-global-freelancer-xnimrodx-lineal-color-xnimrodx-2.png" />

                          <p>Public</p>
                      </div>

                    </div>
                    <form onSubmit={handleCreateRoom} >
                        <input type="text"  placeholder='room name' onChange={handleRoomInputChange}/>
                    
                    

                        <input type="text"  placeholder='invite other' onChange={(e)=>setUserInput(e.target.value)}/>
          { 
                selelctedCollaborator.length > 0 &&    <div className="selectedWrapper">


                 { selelctedCollaborator.map(sel=><SearchSelectedUsers handleRemoveSelected={handleRemoveSelected} selectedUser={sel} key={sel._id}/>)}
        </div>
          }
                   
                 {

                    userInput.length > 0 &&   <SearachUserPopover searchedUsers={filterdCollaborator} handleSelectCollab={handleSelectCollaborator}>
                      <div></div>
                    </SearachUserPopover>
                      }
                        <button type="submit">Create</button>
                    </form>

            </CreateRoomModalWrapper>
  
          
          </ModalContent>
        </Modal>
      </>
    )

    
  }