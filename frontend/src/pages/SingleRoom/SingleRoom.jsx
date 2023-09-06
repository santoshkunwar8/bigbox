import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import styles from "./SingleRoom.module.css"

const SingleRoom = () => {
  return (
    <div className={styles.singleRoom}>


        <div className={styles.roomHeader}>

         
                <div className={styles.headerLeft}>
                    <h1 className={styles.roomName}>Room Name</h1>
                </div>
        
            <div className={styles.headerRight}>

                <AvatarGroup size='sm' max={2}>
  <Avatar  name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar size={'sm'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar size={'sm'} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar size={'sm'} name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar size={'sm'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>



            </div>

        </div>

    </div>
  )
}

export default SingleRoom