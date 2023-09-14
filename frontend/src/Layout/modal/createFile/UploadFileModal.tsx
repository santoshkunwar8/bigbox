import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react'
import React, { ChangeEvent, useRef, useState } from 'react'
import {IoCloseCircleOutline} from "react-icons/io5"
import { UploadFileModalWrapper } from './UploadFileModal.styles'
import PreviewFiles from './previewFiles/PreviewFiles'
type UploadFileModalPropsType={
    children:React.ReactNode
}
const UploadFileModal:React.FC<UploadFileModalPropsType> = ({children}) => {


  const { isOpen, onOpen, onClose } = useDisclosure();
  const [files,setFiles] = useState<File[]>([])
  const inputElmRef:React.MutableRefObject<HTMLInputElement|null> = useRef(null)
  const handleFile=(e:ChangeEvent<HTMLInputElement>)=>{ 
    console.log(e.target.files)
    if(e.target.files){
      let newFile= [...e.target.files]
      setFiles(prev=>([
        ...prev,...newFile
      ]))
    }

  }

  const handleRemoveFile=(file:File)=>{

    setFiles(prev=>{
      return prev.filter(fl=>fl.name !== file.name)
    })


  }
  // console.log(files)


  return (
    <>
      <span onClick={onOpen} style={{height:"100%"}}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <UploadFileModalWrapper>
                    <div className="uploadFileHeader">
                        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/opened-folder.png" alt="opened-folder"/>
                        <h1>Upload file</h1>
                    </div>
                    <div className="imageWrapper">
                    {
                      files.map(file=><PreviewFiles key={file.name}  handleRemoveFile={handleRemoveFile} file={file}/>)
                    }

                  <input multiple type="file"  style={{display:"none"}} ref={inputElmRef} onChange={handleFile} />
                    </div>
                <div className="browseButton" onClick={(e)=>inputElmRef.current?.click()}>
                 <p> 

                 {
                   files.length>0? "Add More" :"Choose File"
                  }
                  </p>
                </div>
            </UploadFileModalWrapper>



        </ModalContent>
      </Modal>
    </>
  )

  
}

export default UploadFileModal