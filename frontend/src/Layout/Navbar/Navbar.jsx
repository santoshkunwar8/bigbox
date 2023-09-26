import React from 'react'
import styles from "./Navbar.module.css"
import { RiLoginCircleFill } from "react-icons/ri"
import SignUpModal from '../modal/Auth/Auth'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SignOutPopover from '../Popover/SignOut/SignoutPopover'
import { Avatar } from '@chakra-ui/react'
const Navbar = () => {
    const {user}  = useSelector((state)=>state.user);


    return (
        <div className={styles.navbar}>
            <Link to={"/home/public"} className={styles.navLeft}>
                <h3 className={styles.appName}>WRAPFILE</h3>
            </Link>

            <div className={styles.navRight}>
         {  user?  <SignOutPopover>

         <div className={styles.userInfo}> 
         <Avatar className={styles.avatarImg} name={user.username} size={"md"} src={user.image} /> 
         <div>
            <h4 className={styles.username}>{user.username}</h4>
            <p className={styles.email}>{user.email}</p>
            </div> </div>
         </SignOutPopover> 
            
            : <SignUpModal>
            
              <button className={styles.navBtn} > <RiLoginCircleFill size={"1.4rem"} />  SIGN UP</button>
            </SignUpModal>   }
            </div>
        </div>
    )
}

export default Navbar