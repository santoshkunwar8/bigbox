import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react'
import React, { ChangeEvent, useRef, useState } from 'react'
import { UploadFileModalWrapper } from './UploadFileModal.styles'
import PreviewFiles from './previewFiles/PreviewFiles'
import useFetch from '../../../hooks/useFetch'
import {useParams}from "react-router-dom"
import { addFileApi, getFileUrlApi } from '../../../utils/api'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../redux'
import { useDispatch, useSelector } from 'react-redux'
import useAlert from '../../../hooks/useAlert'
import { State } from '../../../redux/Reducers'

type UploadFileModalPropsType={
    children:React.ReactNode
}
const UploadFileModal:React.FC<UploadFileModalPropsType> = ({children}) => {
  const {id} = useParams()
  const {user}  = useSelector((state:State)=>state.user);
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [files,setFiles] = useState<File |null>(null);
  const [progressPer,setProgressPer] = useState(0)
  const [isUploading,setIsUploading]=useState(false)
  const {postFetch} = useFetch()
  const dispatch = useDispatch()
  const {alert} =useAlert()
  const { RefreshAction} = bindActionCreators(actionCreators,dispatch)
  const inputElmRef:React.MutableRefObject<HTMLInputElement|null> = useRef(null)

  const handleFile=(e:ChangeEvent<HTMLInputElement>)=>{ 
    if(e.target.files){
      setFiles(e.target.files[0])
      
    }

  }

  
 
  
  const handleRemoveFile=()=>{
    setFiles(null)
  }

  const addFileToDB=async(file:File,url:string)=>{
    const type = file.type.split("/")[0]
    const filePayload={
      user:user?._id,
      size:file.size,
      room:id,
      type,
      url,
      name:file.name,
    }
    
    try {
        await postFetch(addFileApi,filePayload,(err,data)=>{
          if(err)return;
          RefreshAction();
          setFiles(null)
          alert("success","File uploaded successfully")
        })
        setIsUploading(false)
    } catch (error) {
      setIsUploading(false)
    }
    
  }

  const handleGetFileUrl=()=>{

    if(!files || !user)return
    setIsUploading(true)
     const reader:FileReader = new FileReader();
     const [type] = files?.type.split("/")
      reader.readAsDataURL(files);
      reader.onloadend=async()=>{
        let url = reader.result;
        if(url){
         const {status,data} =    await getFileUrlApi(url,type);
         if(status===200){  
          const imgUrl = data.message;
          addFileToDB(files,imgUrl);
          onClose()
         }  
        }
      }

      reader.onerror=()=>{
        setIsUploading(false)
        console.log("some error while reading file");
      }

  
  }

  console.log(isUploading,"uploading")

  return (
    <>
      <span onClick={onOpen} >{children}</span>

      <Modal isOpen={isOpen}   onClose={()=>{ if(!isUploading){ setFiles(null);onClose()}}}>
        <ModalOverlay />
        <ModalContent>
            <UploadFileModalWrapper>
                    <div className="uploadFileHeader">
                        {/* <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/opened-folder.png" alt="opened-folder"/> */}
                        <h1>Upload file</h1>
                    </div>
                
                    <div className="imageWrapper">
                  
                {  files && <PreviewFiles   handleRemoveFile={handleRemoveFile} file={files}/>}
                    
                    </div >
                  { isUploading ? <div className="progressBox">

                    <iframe src="https://lottie.host/embed/001b9309-3a98-48c6-96d4-42b13cf1b412/eDDX84yAca.json"></iframe>
                    <p>Don't get back . Your file is uploading ... </p>
                    </div> :
                    
                    <>
                       <input  type="file" accept='.jpg, .jpeg, .png, .mp4 , .webp , .webm , .pdf'  style={{display:"none"}} ref={inputElmRef} onChange={handleFile} />
                  <div className="supportedText">
                  <p>Video max 100Mb</p>
                  <p>Image , pdf max 10Mb</p>
                  <p>Supported format : png , webp , jpeg , pdf , mp4 , webm</p>
                     </div>
                    <div className="buttonWrapper">

                <div className="browseButton" onClick={(e)=>inputElmRef.current?.click()}>
                 <p> 

                 {
                  "Choose File"
                  }
                  </p>
                </div>
                   <div className={`browseButton uploadFile ${files ? "enable":""}`} onClick={handleGetFileUrl}>
                 <p> 

                  Upload File
                  
                  </p>
                </div>
                  </div>
                    </>
                    
                    }
               
            </UploadFileModalWrapper>



        </ModalContent>
      </Modal>
    </>
  )

  
}

export default UploadFileModal