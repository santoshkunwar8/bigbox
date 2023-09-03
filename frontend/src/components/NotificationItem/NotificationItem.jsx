import React from 'react'
import styles from "./Notification.module.css"

const NotificationItem = ({ type = '' }) => {

    const notifyIcon = {
        warning: "https://img.icons8.com/fluency/48/null/general-warning-sign.png",
        announcement: "https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/null/external-speaker-womens-day-flatart-icons-flat-flatarticons.png",
        success: "https://img.icons8.com/fluency/48/null/ok.png",
        error: "/assets/icons/error.png",
        message: "https://img.icons8.com/3d-fluency/94/null/chat.png",
        invitation: "https://img.icons8.com/external-bearicons-outline-color-bearicons/64/null/external-Add-email-bearicons-outline-color-bearicons.png"
    }

    return (
        <div className={styles.notificationItem}>
            <div className={styles.notify_main}>
                <img width={"25px"} src={notifyIcon[type]} />
                <p className={styles.notify_message}>Your account is created successfully  </p>
            </div>
            <p className={styles.notification_time}>3 hours ago</p>
            {
                type === "invitation" ?
                    <div className={styles.invitation_details}>

                        <button className={`${styles.invitationBtn} ${styles.accept}`}>
                            Accept
                        </button>

                        <button className={`${styles.invitationBtn} ${styles.decline}`}>
                            Decline
                        </button>

                    </div> : ""
            }
        </div>
    )
}

export default NotificationItem