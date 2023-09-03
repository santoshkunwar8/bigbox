import React from 'react'
import Header from '../Header/Header'
import styles from "./Setting.module.css"
const Settings = () => {
    return (
        <div className={styles.settings}>
            <Header name={"Settings"} img={"https://img.icons8.com/plasticine/100/null/gear.png"}>

            </Header>
            <div className={styles.setting_content}>
                <div className={styles.setting_item}>

                    <p className={styles.setting_info_text}>All the settings you do will be reflected to the Room in which you are currently on .</p>
                </div>
                <div className={styles.setting_item}>

                    <p>Change your account email. Wrapfile will send verification code to current email and then you can change email</p>
                    <input className={styles.setting_text_input} type="text" name="" id="" placeholder='current email' />

                </div>
                <div className={styles.setting_item}>

                    <p>Add new email to the current room</p>
                    <input className={styles.setting_text_input} type="text" name="" id="" placeholder='new email address' />

                </div>


                <div className={styles.setting_item}>
                    <p>  Remove  the collaborator    or  change the access time from the  the room</p>
                    <div className={styles.access_time_box}>


                        <div className={styles.access_time_box_item}>
                            <div className={styles.collaborator_main_info_box}>


                                <img className={styles.collaborator_img} src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-1/297386683_793168335071202_7686532393229168177_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=S2jda2vZ_ZkAX_iHrBb&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfCJIdtE5ZvEIYjYiZXZ7nE-CqbQb6JSlCaIygv-u3XORw&oe=63EC1ECA" alt="collaborator_abishar_profile_img" />
                                <div className={styles.collaborator_details}>
                                    <p className={styles.collaborator_name}>Aabiskhar Dhenga</p>
                                    <span className={styles.collaborator_email}>dhengavhai@gmail.com</span>
                                </div>
                            </div>
                            <div className={styles.access_time_span_box}>
                                <div className={styles.change_access_time_box}>
                                    <p>change acces time</p>
                                    <div className={styles.days_count}>

                                        45

                                    </div>
                                </div>
                                <div className={styles.prev_access_time_box} >

                                    <p>access time :</p> <span>45days</span>
                                </div>
                            </div>
                            <div className={styles.remove_collaborator}>

                                <button className={styles.remove_collaborator_btn}>
                                    Remove
                                </button>

                            </div>

                        </div>
                        <div className={styles.access_time_box_item}>
                            <div className={styles.collaborator_main_info_box}>


                                <img className={styles.collaborator_img} src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60" alt="collaborator_abishar_profile_img" />
                                <div className={styles.collaborator_details}>
                                    <p className={styles.collaborator_name}>Henry Perry</p>
                                    <span className={styles.collaborator_email}>perry   @gmail.com</span>
                                </div>
                            </div>
                            <div className={styles.access_time_span_box}>
                                <div className={styles.change_access_time_box}>
                                    <p>change acces time</p>
                                    <div className={styles.days_count}>

                                        45

                                    </div>
                                </div>
                                <div className={styles.prev_access_time_box} >

                                    <p>access time :</p> <span>45days</span>
                                </div>
                            </div>
                            <div className={styles.remove_collaborator}>

                                <button className={styles.remove_collaborator_btn}>
                                    Remove
                                </button>

                            </div>

                        </div>
                        <div className={styles.access_time_box_item}>
                            <div className={styles.collaborator_main_info_box}>


                                <img className={styles.collaborator_img} src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.6435-9/152422905_113694587431792_3675893347751725437_n.jpg?stp=c38.0.152.152a_dst-jpg_p228x119&_nc_cat=111&ccb=1-7&_nc_sid=574b62&_nc_ohc=qNm6O7EYruEAX_G3_hj&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfD69HtM-QjPxAXnK9WuUOFdauDo69KcScnzsdW3vuVxZg&oe=640EB104" alt="collaborator_abishar_profile_img" />
                                <div className={styles.collaborator_details}>
                                    <p className={styles.collaborator_name}>Rajiv Shrestha</p>
                                    <span className={styles.collaborator_email}>shrestha@gmail.com</span>
                                </div>
                            </div>
                            <div className={styles.access_time_span_box}>
                                <div className={styles.change_access_time_box}>
                                    <p>change acces time</p>
                                    <div className={styles.days_count}>

                                        45

                                    </div>
                                </div>
                                <div className={styles.prev_access_time_box} >

                                    <p>access time :</p> <span>45days</span>
                                </div>
                            </div>
                            <div className={styles.remove_collaborator}>

                                <button className={styles.remove_collaborator_btn}>
                                    Remove
                                </button>

                            </div>

                        </div>
                        <div className={styles.access_time_box_item}>
                            <div className={styles.collaborator_main_info_box}>


                                <img className={styles.collaborator_img} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60" alt="collaborator_abishar_profile_img" />
                                <div className={styles.collaborator_details}>
                                    <p className={styles.collaborator_name}>Skillf </p>
                                    <span className={styles.collaborator_email}>Skillf339@gmail.com</span>
                                </div>
                            </div>
                            <div className={styles.access_time_span_box}>
                                <div className={styles.change_access_time_box}>
                                    <p>change acces time</p>
                                    <div className={styles.days_count}>

                                        45

                                    </div>
                                </div>
                                <div className={styles.prev_access_time_box} >

                                    <p>access time :</p> <span>45days</span>
                                </div>
                            </div>
                            <div className={styles.remove_collaborator}>

                                <button className={styles.remove_collaborator_btn}>
                                    Remove
                                </button>

                            </div>

                        </div>
                        <div className={styles.access_time_box_item}>
                            <div className={styles.collaborator_main_info_box}>


                                <img className={styles.collaborator_img} src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60" alt="collaborator_abishar_profile_img" />
                                <div className={styles.collaborator_details}>
                                    <p className={styles.collaborator_name}>Johnyy ryder</p>
                                    <span className={styles.collaborator_email}>ryderJohny@gmail.com</span>
                                </div>
                            </div>
                            <div className={styles.access_time_span_box}>
                                <div className={styles.change_access_time_box}>
                                    <p>change acces time</p>
                                    <div className={styles.days_count}>

                                        45

                                    </div>
                                </div>
                                <div className={styles.prev_access_time_box} >

                                    <p>access time :</p> <span>45days</span>
                                </div>
                            </div>
                            <div className={styles.remove_collaborator}>

                                <button className={styles.remove_collaborator_btn}>
                                    Remove
                                </button>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings