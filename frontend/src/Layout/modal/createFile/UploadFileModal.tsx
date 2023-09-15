import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react'
import React, { ChangeEvent, useRef, useState } from 'react'
import { UploadFileModalWrapper } from './UploadFileModal.styles'
import PreviewFiles from './previewFiles/PreviewFiles'
import useUploadImage from '../../../hooks/useUpload'
import useFetch from '../../../hooks/useFetch'
import {useParams}from "react-router-dom"
import { addFileApi } from '../../../utils/api'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../redux'
import { useDispatch } from 'react-redux'
import {ConstantVar}  from "../../../utils/enums"
type UploadFileModalPropsType={
    children:React.ReactNode
}
const UploadFileModal:React.FC<UploadFileModalPropsType> = ({children}) => {
  const {id} = useParams()
  const currentUser= "64f7e688fea8a219d4d481eb"
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [files,setFiles] = useState<File[]>([]);
  const [progressPer,setProgressPer] = useState(0)
  const [isUploading,setIsUploading]=useState(false)

  const dispatch = useDispatch()
  const { RefreshAction} = bindActionCreators(actionCreators,dispatch)
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
  const {upload}= useUploadImage()
  const {postFetch} = useFetch();



  const handleRemoveFile=(file:File)=>{

    setFiles(prev=>{
      return prev.filter(fl=>fl.name !== file.name)
    })


  }
  const uploadPhotos=()=>{
    setIsUploading(true)
    let totalSize= files.reduce((t,fl)=>   t + fl.size,0);
    console.log("total size",totalSize/1024);
    files.forEach((f,no)=>{
      console.log("running for file",no+1)
      upload(f,(progress,url)=>{

        // calculating the progress
        let currProgress = (no * 100) + progress ;
      
  
        setProgressPer(currProgress);
        if(url){
          addFileToDB(f,url,no+1)
        }
      })
    })
  }  

  const addFileToDB=async(file:File,url:string,no:number)=>{
    const type = file.type.split("/")[0]
    const filePayload={
      user:currentUser,
      size:file.size,
      room:id,
      type,
      url,
      name:file.name,
    }
    try {
        await postFetch(addFileApi,filePayload,(err,data)=>{
          if(err)return;
          if(no=== files.length){ 
            onClose()
            setIsUploading(false)
            RefreshAction()
            setFiles([])
          }
        })
    } catch (error) {
      console.log(error)
      setIsUploading(false)
    }
    
  }


  return (
    <>
      <span onClick={onOpen} >{children}</span>

      <Modal isOpen={isOpen}  onClose={()=>{setFiles([]);onClose()}}>
        <ModalOverlay />
        <ModalContent>
            <UploadFileModalWrapper>
                    <div className="uploadFileHeader">
                        {/* <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/opened-folder.png" alt="opened-folder"/> */}
                        <h1>Upload file</h1>
                    </div>
                
                    <div className="imageWrapper">
                    {
                      files.map(file=><PreviewFiles key={file.name}  handleRemoveFile={handleRemoveFile} file={file}/>)
                    }
                    </div>
                  { isUploading && <div className="progressBox">

                    <p>{progressPer}%</p>
                  <div className="progressBar">
                    <div className="progress" style={{width:`${progressPer}%`}}></div>
                    
                  </div>
                    </div>}
                  <input multiple type="file"  style={{display:"none"}} ref={inputElmRef} onChange={handleFile} />
                    <div className="buttonWrapper">

                <div className="browseButton" onClick={(e)=>inputElmRef.current?.click()}>
                 <p> 

                 {
                   files.length>0? "Add More" :"Choose File"
                  }
                  </p>
                </div>
                   <div className={`browseButton uploadFile ${files.length > 0 ? "enable":""}`} onClick={uploadPhotos}>
                 <p> 

                  Upload File
                  
                  </p>
                </div>
                  </div>
            </UploadFileModalWrapper>



        </ModalContent>
      </Modal>
    </>
  )

  
}

export default UploadFileModal