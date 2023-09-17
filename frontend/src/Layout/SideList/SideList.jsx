import React from 'react'
import styles from "./SideList.module.css"
import { Link } from "react-router-dom"
const SideList = () => {
    return (
        <div className={styles.sideList}>
            <Link to="rooms">
                <div className={styles.sideItem}>
                    <img src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                    <p>Rooms</p>

                </div>
            </Link>
          
            {/* <Link to={"settings"}>
                <div className={styles.sideItem}>
                    <img src="https://img.icons8.com/plasticine/100/null/gear.png" alt='settingImg' />
                    <p>Settings</p>
                </div>
            </Link> */}
            <Link to={"account"}>
                <div className={styles.sideItem}>
                    <img className={styles.sideItem_profileImg} src={"/assets/images/user.png"} alt="fileUploadImg" />
                    <p>Account</p>
                </div>
            </Link>

        </div>
    )
}

export default SideList