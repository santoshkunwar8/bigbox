import React from 'react'
import Header from '../Header/Header'
import styles from "./UploadFile.module.css"

const UploadFile = () => {
    return (
        <div className={styles.uploadFile}>
            <Header img={"https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/null/external-account-taxes-flatart-icons-lineal-color-flatarticons-1.png"} name={"upload Files"} />
            <div className={styles.upload_content}>

                <img src="/assets/images/add_files.png" alt="addFileImg" />
                <p className={styles.upload_content_text}>Upload File  & Make it online <br /> If you can upload multiple files at a time </p>
            </div>
        </div>
    )
}

export default UploadFile