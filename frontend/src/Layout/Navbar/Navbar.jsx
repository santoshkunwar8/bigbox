import React from 'react'
import styles from "./Navbar.module.css"
import { RiLoginCircleFill } from "react-icons/ri"
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navLeft}>
                <h3 className={styles.appName}>WRAPFILE</h3>
                {/* <div className={styles.left_otherItems}>
                    <div className={styles.activeRoom}> <img width={"20px"} src="https://img.icons8.com/officel/40/null/slack.png" alt="roomIcon" /> ROOM1</div>
                </div> */}
            </div>
            <div className={styles.navRight}>
                <button className={styles.navBtn} > <RiLoginCircleFill size={"1.4rem"} />  SIGN UP</button>
            </div>
        </div>
    )
}

export default Navbar