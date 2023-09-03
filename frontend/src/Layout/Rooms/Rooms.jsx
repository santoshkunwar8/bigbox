import React from 'react'
import Room from '../../components/Room/Room'
import Header from '../Header/Header'
import styles from "./Rooms.module.css"
import { BiFilter } from "react-icons/bi"
import { MdCreateNewFolder } from "react-icons/md"

const Rooms = () => {
    return (
        <div className={styles.rooms}>
            <Header img={"https://img.icons8.com/officel/40/null/slack.png"} name={"Created Rooms"} >
                <button className={styles.filterBtn}>
                    <BiFilter className={styles.filter_icon} size={"2rem"} />
                    Filter Rooms
                </button>
                <button className={styles.create_room}>

                    <MdCreateNewFolder size={"1.62rem"} className={styles.create_btn} />   Create

                </button>
            </Header>
            <div className={styles.room_container}>
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />

            </div>
        </div>
    )
}

export default Rooms