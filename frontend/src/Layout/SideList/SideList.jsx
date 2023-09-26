import React from 'react'
import styles from "./SideList.module.css"
import { Link, useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { Avatar } from '@chakra-ui/react'
const SideList = () => {
    const {user} = useSelector(state=>state.user)
    return (
        <div className={styles.sideList}>
               <Link to="public">
                <div className={styles.sideItem}>
                    <img src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                    <p>Public Rooms</p>

                </div>
            </Link>
            {
             user &&  <>
            <Link to="rooms">
                <div className={styles.sideItem}>
                   <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/change-user-male.png" alt="change-user-male"/>
                    <p>My Rooms</p>
                </div>
            </Link>
             <Link to={`account/${user?._id}`}>
                <div className={styles.sideItem}>
                    <Avatar size={"sm"}  name={user.username} src={user?.image} />
                    <p>Account</p>
                </div>
            </Link>
             </>
            }
        </div>
    )
}

export default SideList



