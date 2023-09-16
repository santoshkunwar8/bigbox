import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react'
import React  from 'react'
import { RoomType } from '../../../../utils/Types'
import { DeleteRoomModalWrapper } from './DeleteRoom.styles'
import { deleteRoomApi } from '../../../../utils/api'
import { useParams } from 'react-router-dom'

type ChangeVisibilityType={

    children:React.ReactNode,
    roomData:RoomType|null

}

export const  DeleteRoomModal:React.FC<ChangeVisibilityType>=({children,roomData})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
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


            <DeleteRoomModalWrapper>

                <h5 className='headerText'>Are you sure you want to delete {roomData?.name} room ?</h5>
                <button onClick={handleClick}>  confirm</button>
            </DeleteRoomModalWrapper>
       
        </ModalContent>
      </Modal>
    </>
  )
}
