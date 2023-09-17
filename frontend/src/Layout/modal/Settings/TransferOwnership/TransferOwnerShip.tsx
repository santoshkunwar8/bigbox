import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect, useState }  from 'react'
import { RoomType, Usertype } from '../../../../utils/Types'

import { deleteRoomApi } from '../../../../utils/api'
import { useParams } from 'react-router-dom'
import { TransferOwnershipWrapper } from './TransferOwnerShip.styles'
import CollaboratorItem from '../../../../components/CollaboratorItem/CollaboratorItem'

type ChangeVisibilityType={

    children:React.ReactNode,
    roomData:RoomType|null

}

export const  TransferOwnerShip:React.FC<ChangeVisibilityType>=({children,roomData})=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [collaboratorArr,setCollaboratorArr] = useState<Usertype[]>([]);


  useEffect(()=>{
        // roomData?.collaborators.filter(u=>u. )
  },[])

    const {id} = useParams()
  const handleClick=async()=>{

    if(!id)return;

    try {
     const {status,data} =   await  deleteRoomApi(id) 
        if(status===200){
            onClose()
        }

        
    } catch (error) {
        console.log(error)
    }


  }


  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>


            <TransferOwnershipWrapper>

                <div className="transferOwnershipHeader">
                    <h1>Transfer ownership </h1>
                </div>
            <input  className="searchCollaborator"  placeholder='search for collaborators' type="text"  />
            <div className="collaboratorList">
                {
                    roomData?.collaborators.map(user=><CollaboratorItem key={user._id} user={user}/>)
                }
               
            </div>

            </TransferOwnershipWrapper>
       
        </ModalContent>
      </Modal>
    </>
  )
}
