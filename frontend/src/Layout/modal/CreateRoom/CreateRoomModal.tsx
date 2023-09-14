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
  type CreateRoomModalProps={
    children:React.ReactNode,
  }
  type debatePayloadType={
    name:string,
    collaborators:string[],
  }
  export const  CreateRoomModal:React.FC<CreateRoomModalProps>=({children})=> {



    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userInput,setUserInput] =useState("");
    const [ selelctedCollaborator,setSelectedCollaborator]=useState<Usertype[]>([]);
    const [searchedUsers,setSearchedUsers] =useState<Usertype[]>([])
    const {getFetch,postFetch} = useFetch();
    const [filterdCollaborator,setFilteredCollaborator]=useState<Usertype[]>([])
    const [debatePayload,setDebatePayload]=useState<debatePayloadType>({
      name:"",
      collaborators:[],
    })
    const currentUser = "64f7e688fea8a219d4d481eb";
    useEffect(()=>{


      getFetch(searchUserByNameApi,[userInput],(err,data)=>{
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
        collaborators:[...debatePayload.collaborators,currentUser]
      };

    try {

      postFetch(createRoomApi,{...payload,user:currentUser},(err,data)=>{
        if(err)return ;
        onClose()
      })
      
        console.log(debatePayload)
    } catch (error) {
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

                    <form onSubmit={handleCreateRoom} >
                        <input type="text"  placeholder='room name' onChange={handleRoomInputChange}/>
                    
                    

                        <input type="text"  placeholder='invite other' onChange={(e)=>setUserInput(e.target.value)}/>
                      <div className="selectedWrapper">
          { 

                  selelctedCollaborator.map(sel=><SearchSelectedUsers handleRemoveSelected={handleRemoveSelected} selectedUser={sel} key={sel._id}/>)
          }
        </div>
                   
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