import React, { FC, useEffect, useState } from 'react'
import { PreviewFilesWrapper } from './PreviewFiles.styles'
import { IoMdCloseCircle } from "react-icons/io";

type PreviewFilesType={
    file:File,
    handleRemoveFile:(file:File)=>void;
}

const PreviewFiles:FC<PreviewFilesType> = ({file , handleRemoveFile }) => {
    const [fileType,setFileType]= useState<string | null>(null)

    useEffect(()=>{
        const type = file.type.split("/")[0]
        setFileType(type)
    },[file])
    interface FileMapping {
  [key: string]: React.ReactNode;
}



    const fileMapping:FileMapping={
      image:<ImageFile file={file}/>,
      video:<VideoFile file={file}/>,
      application:<PdfFile file={file}/>
    }

      



  return (
    <PreviewFilesWrapper>
        <div onClick={()=>handleRemoveFile(file)} className="delBtn"><IoMdCloseCircle className='closeButton'/></div>
          { fileType && fileMapping[fileType]}
    
    </PreviewFilesWrapper>
  )
}

export default PreviewFiles

const ImageFile=({file})=>{
  return (
    <>
           <img src={URL.createObjectURL(file)} alt="previewImg" /> 
    </>
  )
}
const VideoFile=({file})=>{
  return (
    <>
           <video src={URL.createObjectURL(file)} autoPlay muted style={{pointerEvents:"none"}}></video> 
    </>
  )
}
const PdfFile=({file})=>{
  return (
    <>
           <iframe src={URL.createObjectURL(file)}></iframe>
    </>
  )
}



