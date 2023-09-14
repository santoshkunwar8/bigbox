import React, { useEffect, useState } from 'react'
import FileItem from '../../FileItem/FileItem';
import styles from "./RoomsAssetsBox.module.css";
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { getFilebyRoomId } from '../../../utils/api';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import UploadFileModal from '../../../Layout/modal/createFile/UploadFileModal';


const RoomsAssets = () => {

  const {id} = useParams();
  const [filesArr,setFilesArr] =useState(null)

  const {getFetch} = useFetch()
  useEffect(()=>{
    getFetch(getFilebyRoomId,[id],(err,data)=>{
      if(err)return;
      setFilesArr(data)
    })
  },[id])

  return (
    <div className={styles.roomAssets}>
      <div className={styles.filecontainer}>
      <UploadFileModal>

      <div className={styles.uploadItem}>

        <AiOutlineCloudUpload/>
        <p>Upload</p>

      </div>
      </UploadFileModal>

            {
              filesArr  ? filesArr.map(file=><FileItem file={file}/>) :"LOADING....."
            }
            </div>
    </div>
  )
}

export default RoomsAssets