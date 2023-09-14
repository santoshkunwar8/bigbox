import React, { FC, useEffect, useState } from 'react'
import { PreviewFilesWrapper } from './PreviewFiles.styles'
import { IoCloseCircleOutline } from 'react-icons/io5'
type PreviewFilesType={
    file:File,
    handleRemoveFile:(file:File)=>void;
}

const PreviewFiles:FC<PreviewFilesType> = ({file , handleRemoveFile }) => {
    const [fileType,setFileType]= useState<string | null>(null)

    useEffect(()=>{
        const type = file.type.split("/")[0]
        setFileType(type)
        console.log(file.type)
    },[file])
  return (
    <PreviewFilesWrapper>
        <div onClick={()=>handleRemoveFile(file)} className="delBtn"><IoCloseCircleOutline/></div> <img src={URL.createObjectURL(file)} alt="previewImg" /> 
    </PreviewFilesWrapper>
  )
}

export default PreviewFiles