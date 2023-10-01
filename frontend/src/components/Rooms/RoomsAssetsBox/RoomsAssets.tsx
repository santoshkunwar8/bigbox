import React, { useEffect, useState } from 'react'
import FileItem from '../../FileItem/FileItem';
import styles from "./RoomsAssetsBox.module.css";
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { getFilebyRoomId } from '../../../utils/api';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import UploadFileModal from '../../../Layout/modal/createFile/UploadFileModal';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/Reducers';
import { FileTye } from '../../../utils/Types';

type roomAssetsPropsType = {
  filesArr:FileTye[] |null
}

const RoomsAssets:React.FC<roomAssetsPropsType> = ({filesArr}) => {

  const {id} = useParams();
  const {user}  = useSelector((state)=>state.user);

  

  return (
    <div className={styles.roomAssets}>
      <div className={styles.filecontainer}>
   {
    user &&  <UploadFileModal>

      <div className={styles.uploadItem}>

        <AiOutlineCloudUpload/>
        <p>Upload</p>

      </div>
      </UploadFileModal>
   }  

            {
              filesArr  ? filesArr.map(file=><FileItem file={file}/>) :"LOADING....."
            }
            </div>
    </div>
  )
}

export default RoomsAssets