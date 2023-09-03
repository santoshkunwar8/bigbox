import React from 'react'
import NotificationItem from '../../components/NotificationItem/NotificationItem'
import Header from '../Header/Header'
import styles from './Notifications.module.css'

const Notifications = () => {
    return (
        <div>
            <Header name={"Notifications"} img={"/assets/icons/bell.png"} >  </Header>
            <div className={styles.notificationWrapper}>
                <NotificationItem type={"warning"} />
                <NotificationItem type='error' />
                <NotificationItem type={"warning"} />
                <NotificationItem type={"invitation"} />
                <NotificationItem type={"warning"} />
                <NotificationItem type={"announcement"} />
                <NotificationItem type={"invitation"} />
                <NotificationItem type={"warning"} />
                <NotificationItem type='error' />
                <NotificationItem type={"announcement"} />
                <NotificationItem type='error' />
                <NotificationItem type='error' />
                <NotificationItem type={"error"} />
                <NotificationItem type='success' />
                <NotificationItem type={"message"} />
                <NotificationItem type='success' />
                <NotificationItem type={"announcement"} />
                <NotificationItem type={"message"} />
                <NotificationItem type='error' />
                <NotificationItem type={"message"} />
                <NotificationItem type={"invitation"} />
                <NotificationItem type={"announcement"} />
            </div>
        </div>
    )
}

export default Notifications