import styles from "./Room.module.css"
const Room = () => {
    return (
        <div className={styles.room}>
            {/* <div className={styles.imageWrapper}>

                <img src="https://images.unsplash.com/photo-1676015576269-64c967a98bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=60" alt="roomImg" />
            </div> */}
            <div className={styles.room_details}>
                <div className={styles.details_top}>
                    <h5 className={styles.room_name}>Happy Days</h5>
                </div>
                <div className={styles.details_top}>
                    <span className={styles.size}>1.2GB used</span>
                    <div className={styles.updatedTime} >
                        <p>Collaborators : </p> <span>1</span>
                    </div>
                    <div className={styles.updatedTime} >
                        <p>Last updated : </p> <span>7 hours ago</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Room