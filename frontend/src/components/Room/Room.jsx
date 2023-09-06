import { Link } from "react-router-dom";
import styles from "./Room.module.css";
import {format} from "timeago.js"

const Room = ({room}) => {
    return (
        <Link to={`../rooms/${room?._id}`} className={styles.room}>
           
            <div className={styles.room_details}>
                <div className={styles.details_top}>
                    <h5 className={styles.room_name}>{room.name}</h5>
                </div>
                <div className={styles.details_top}>
                    <span className={styles.size}>1.2GB used</span>
                    <div className={styles.updatedTime} >
                        <p>Collaborators : </p> <span>{room.collaborators?.length}</span>
                    </div>
                    <div className={styles.updatedTime} >
                        <p>Last updated : </p> <span>{format(room.updatedAt)}</span>
                    </div>
                </div>


            </div>
        </Link>
    )
}

export default Room