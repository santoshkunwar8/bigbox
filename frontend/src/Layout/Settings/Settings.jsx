import React from 'react'
import Header from '../Header/Header'
import styles from "./Setting.module.css"
const Settings = () => {
    return (
        <div className={styles.settings}>
            <Header name={"Settings"} img={"https://img.icons8.com/plasticine/100/null/gear.png"}>

            </Header>
            <div className={styles.setting_content}>

                <div className={styles.setting_section}>
                    <h1 className={styles.settingTopic}>General </h1>
                    <div className={styles.hr}></div>
                    <div className={styles.settingContent}>

        <div className={styles.singleItem}>


                    <p>Room name</p>
                    <div className={styles.inputBox}>
                    
                    <input type="text" placeholder='' value={"Devros Room"} />
                    <button className={styles.renameButton}>
                        Rename
                    </button>
                    </div>
                </div>

                    </div>
        </div>
                    
                <div className={styles.setting_section}>
                    <h1 className={styles.settingTopic}>Manage Access </h1>
                    <div className={styles.hr}></div>
                    <div className={styles.settingContent}>

                        <div className={styles.searchCollaborators}>
                            <input className={styles.searchCollaboratorsInput} type="text" placeholder='search collaborator'/>
                        </div>
                        <div className={styles.collaboratorsList}>
                                   <div className={styles.access_time_box_item}>
                            <div className={styles.collaborator_main_info_box}>


                                <img className={styles.collaborator_img} src="https://images.pexels.com/photos/4022812/pexels-photo-4022812.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="collaborator_abishar_profile_img" />
                                <div className={styles.collaborator_details}>
                                    <p className={styles.collaborator_name}>Rajiv Shrestha</p>
                                    <span className={styles.collaborator_email}>shrestha@gmail.com</span>
                                </div>
                            </div>
                            {/* <div className={styles.access_time_span_box}>
                                <div className={styles.change_access_time_box}>
                                    <p>change acces time</p>
                                    <div className={styles.days_count}>

                                        45

                                    </div>
                                </div>
                                <div className={styles.prev_access_time_box} >

                                    <p>access time :</p> <span>45days</span>
                                </div>
                            </div> */}
                            <div className={styles.remove_collaborator}>

                                <button className={styles.remove_collaborator_btn}>
                                    Remove
                                </button>

                            </div>

                        </div>
                                   <div className={styles.access_time_box_item}>
                            <div className={styles.collaborator_main_info_box}>


                                <img className={styles.collaborator_img} src="https://images.pexels.com/photos/4022812/pexels-photo-4022812.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="collaborator_abishar_profile_img" />
                                <div className={styles.collaborator_details}>
                                    <p className={styles.collaborator_name}>Rajiv Shrestha</p>
                                    <span className={styles.collaborator_email}>shrestha@gmail.com</span>
                                </div>
                            </div>
                            {/* <div className={styles.access_time_span_box}>
                                <div className={styles.change_access_time_box}>
                                    <p>change acces time</p>
                                    <div className={styles.days_count}>

                                        45

                                    </div>
                                </div>
                                <div className={styles.prev_access_time_box} >

                                    <p>access time :</p> <span>45days</span>
                                </div>
                            </div> */}
                            <div className={styles.remove_collaborator}>

                                <button className={styles.remove_collaborator_btn}>
                                    Remove
                                </button>

                            </div>

                        </div>
                        </div>
                    </div>  
        </div>
              
                <div className={styles.setting_section}>
                    <h1 className={styles.settingTopic}>Danger Zone </h1>
                    <div className={styles.hr}></div>
                    <div className={styles.settingContent}>

                        <div className={styles.dangerItem}>
                            <div className={styles.dangerItemLeft}>
                                <p className={styles.dangerItemHeader}>Change Room visibility</p>
                                <p >This room is currenlty public</p>
                            </div>
                            <button>Change visibility</button>
                        </div>
                          <div className={styles.dangerItem}>
                            <div className={styles.dangerItemLeft}>
                                <p className={styles.dangerItemHeader}>Transfer ownership</p>
                                <p >Transfer this room  to another user or to an organization .</p>
                            </div>
                            <button>Transfer</button>
                        </div>
                        
                         <div className={styles.dangerItem}>
                            <div className={styles.dangerItemLeft}>
                                <p className={styles.dangerItemHeader}>Delete this room </p>
                                <p >Once you delete a room, there is no going back. Please be certain.</p>
                            </div>
                            <button>Delete Room</button>
                        </div>


                    </div>  
        </div>
             


           
            </div>
        </div>
    )
}

export default Settings

