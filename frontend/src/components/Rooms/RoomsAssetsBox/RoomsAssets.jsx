import React, { useEffect, useState } from 'react'
import FileItem from '../../FileItem/FileItem';
import styles from "./RoomsAssetsBox.module.css";
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


const RoomsAssets = () => {

  const {id} = useParams();
  const [filesArr,setFilesArr] =useState(null)

  const {getFetch} = useFetch()
  useEffect(()=>{
    getFetch('/file',(err,data)=>{
      if(err)return;
      setFilesArr(data)
    })
  },[id])

  return (
    <div className={styles.roomAssets}>
            {
              filesArr  ? filesArr.map(file=><FileItem file={file}/>) :"LOADING....."
            }
    </div>
  )
}

export default RoomsAssets