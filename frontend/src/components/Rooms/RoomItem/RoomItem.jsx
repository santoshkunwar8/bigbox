import { Link } from "react-router-dom";
import styles from "./Room.module.css";
import {format} from "timeago.js"
import { Avatar, AvatarGroup } from "@chakra-ui/react";

const RoomItem = ({room}) => {
    return (
        <Link to={`../rooms/${room?._id}`} className={styles.room}>
           
            <div className={styles.room_details}>
                <div className={styles.details_header}>
                    <h5 className={styles.room_name}>{room.name}</h5>

                <div className={styles.collabAvatars}>
                              <AvatarGroup size="xs" max={3}>
           
          {
              room?.collaborators?.map(cb=>            <Avatar borderColor={"#646cff"} key={cb?._id}  name={cb.username} src={cb.image} />
              )
            }
</AvatarGroup>
            </div>
                </div>
                <div className={styles.details_top}>
                    <span className={styles.size}>1.2GB used</span>
                    <div className={styles.updatedTime} >
                        <p>Collaborators : &nbsp; </p> <span>{room.collaborators?.length}</span>
                    </div>
                    <div className={styles.updatedTime} >
                        <p>Last updated : &nbsp;</p> <span>{format(room.updatedAt)}</span>
                    </div>
                </div>


            </div>
        </Link>
    )
}

export default RoomItem