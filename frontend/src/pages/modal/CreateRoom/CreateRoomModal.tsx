import {
    Modal,
    ModalOverlay,
    ModalContent,

    useDisclosure,
 

  } from '@chakra-ui/react'
  import React, { useEffect, useState } from 'react';
import { CreateRoomModalWrapper } from './CreateRoomModal.styles';
import SearachUserPopover from '../../../Layout/Popover/SearchUserPopover/SearachUserPopover';
import { Usertype } from '../../../utils/Types';
import useFetch from '../../../hooks/useFetch';
import { searchUserByNameApi } from '../../../utils/api';
import SearchSelectedUsers from '../../../components/User/SearchSelectedUsers/SearchSelectedUsers';
  type CreateRoomModalProps={
    children:React.ReactNode,
  }
  export const  CreateRoomModal:React.FC<CreateRoomModalProps>=({children})=> {



    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userInput,setUserInput] =useState("");
    const [ selelctedCollaborator,setSelectedCollaborator]=useState<Usertype[]>([]);
    const [searchedUsers,setSearchedUsers] =useState<Usertype[]>([])
    const {getFetch} = useFetch();
    const [filterdCollaborator,setFilteredCollaborator]=useState<Usertype[]>([])

    useEffect(()=>{


      getFetch(searchUserByNameApi,[userInput],(err,data)=>{
        if(err)return;
        setSearchedUsers(data)
      })

    },[userInput])

    useEffect(()=>{

     const filtered =  searchedUsers.filter(user => {

        return !selelctedCollaborator.some(selectedUser => selectedUser._id === user._id);
      });
      
      setFilteredCollaborator(filtered)
    },[selelctedCollaborator,searchedUsers])

    const handleSearchUserByUsername=()=>{

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

                    <form >
                        <input type="text"  placeholder='room name'/>
                    
                    

                        <input type="text"  placeholder='invite other' onChange={(e)=>setUserInput(e.target.value)}/>
      <div className="selectedWrapper">
      { 

selelctedCollaborator.map(sel=><SearchSelectedUsers selectedUser={sel} key={sel._id}/>)
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