import React from 'react'
import styles from "./header.module.css"


const Header = ({ children, img, name }) => {
    return (
        <div className={styles.roomHeader}>
            <div className={styles.header}>
                <img width={"30px"} src={img} alt={`${name} Icon`} />  <h2>{name}</h2>
            </div>
            <div className={styles.header_right_box}>

                {
                    children
                }
            </div>

        </div>
    )
}

export default Header