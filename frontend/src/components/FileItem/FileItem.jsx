import styles from "./FileItem.module.css"

const iconMap={
      video:`https://img.icons8.com/3d-fluency/94/movies-folder.png`,
      image:'https://img.icons8.com/3d-fluency/94/stack-of-photos.png',
     pdf:'https://img.icons8.com/3d-fluency/94/pdf.png',
     zip:`https://img.icons8.com/external-soft-fill-juicy-fish/60/external-zip-data-organisation-soft-fill-soft-fill-juicy-fish.png `,
     audio:'https://img.icons8.com/3d-fluency/94/photos-folder.png'
     
}

const FileItem = ({file}) => {
  console.log(file)
  const handleOpenFile=()=>{
    window.open(file.url)
  }
  return (
    <div className={styles.fileItem} onClick={handleOpenFile}>

            <img className={styles.fileImg} width="94" height="94" src={iconMap[file.type]} alt="stack-of-photos"/>
            <p className={styles.fileName}>{file.name.substring(0,15)}...</p>


    </div>
  )
}

export default FileItem

