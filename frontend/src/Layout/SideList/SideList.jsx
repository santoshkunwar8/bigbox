import React, { useEffect, useState } from 'react'
import styles from "./SideList.module.css"
import { Link, useLocation, useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { Avatar } from '@chakra-ui/react'
import SignUpModal from '../modal/Auth/Auth'
const SideList = () => {
    const {user} = useSelector(state=>state.user)
    const [activeSideItem,setActiveSideItem] =useState("public")
    const  location  =useLocation()


    useEffect(()=>{
        const [intial,page,path]  = location.pathname.split("/")

        setActiveSideItem(path)
        
        
    },[location ])


    return (

        <div className={styles.sideList}>
            <div className={styles.logoBox}>
                <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/layers.png" alt="layers"/>
                <h2 className={styles.logoText}>Wrapfile</h2>   
            </div>
               <Link to="public">
                <div className={`${styles.sideItem} ${activeSideItem==="public" ? styles.activeItem:""}`}>
                    <img src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                    <p>Public Rooms</p>

                </div>
            </Link>
            {
             user &&  <>
            <Link to="rooms">
                 <div className={`${styles.sideItem} ${activeSideItem==="rooms" ? styles.activeItem:""}`}>
                   <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/change-user-male.png" alt="change-user-male"/>
                    <p>My Rooms</p>
                </div>
            </Link>
             <Link to={`account/${user?._id}`}>
                <div className={`${styles.sideItem} ${activeSideItem==="account" ? styles.activeItem:""}`}>
                <Avatar size={"sm"}  name={user.username} src={user?.image} />
                    <p>Account</p>
                </div>
            </Link>
             </>
            }
            {
                !user &&   <SignUpModal>
                    <button className={styles.loginButton}>
                        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/lock--v1.png" alt="lock--v1"/>
                        <p>Login</p>
                    </button>
            </SignUpModal>
            }

        </div>
    )
}

export default SideList



