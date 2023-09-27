import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RoomType } from '../../../../utils/Types'
import  {ConstantVar} from "../../../../utils/Enums";
import { ChangeVisibilityWrapper } from './ChangeVisibility.styles'
import { updateRoomApi } from '../../../../utils/api'
import { useParams } from 'react-router-dom'

type ChangeVisibilityType={

    children:React.ReactNode,
    roomData:RoomType|null

}

export const  ChangeVisibility:React.FC<ChangeVisibilityType>=({children,roomData})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [accessType,setAccessType] =useState("")
  const {id} = useParams()


  useEffect(()=>{
    if(roomData){
        const {isPublic} = roomData;
        let access = isPublic ? ConstantVar.PUBLIC: ConstantVar.PRIVATE
        setAccessType(access)
    }
  },[roomData])

  const handleAccessChange=async(type)=>{
    setAccessType(type)
    if(!id)return;
    try {
       await updateRoomApi(id,{isPublic:type===ConstantVar.PUBLIC})
       onClose()
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


            <ChangeVisibilityWrapper>
                <p className='headerText'>Change visibility for {roomData?.name} </p>
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
            </ChangeVisibilityWrapper>
       
        </ModalContent>
      </Modal>
    </>
  )
}
