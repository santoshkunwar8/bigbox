import React from 'react'
import Header from '../Header/Header'
import styles from "./Account.module.css"


const Account = () => {
    return (
        <div
            className={styles.Account_box}>
            <Header img={"/assets/images/user.png"} name={"My Account"} />
            <div className={styles.account_content}>

                <div className={styles.account_personal_details}>

                    <img className={styles.user_profile_img} src="/assets/images/user.png" alt="" />
                    <div className={styles.account_primary_details_box}>

                        <div className={styles.primary_details}>
                            <p>Santosh kunwar</p>
                            <p>santoshkunwar9454@gmail.com</p>
                            <div className={styles.user_description}> hey !! i am a software developer by profession</div>

                        </div>
                        <div className={styles.secondary_details}>
                            <div className={styles.room_details_box}>
                                <img width={"20px"} src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                                <p>27 rooms</p>
                            </div>
                            <div className={styles.star_box}>
                                <img width={"20px"} src="https://img.icons8.com/fluency/48/null/filled-star.png" />
                                <p>72 stars</p>
                            </div>
                            <div className={styles.connectd_user}>
                                <img width={"20px"} src="https://img.icons8.com/stickers/100/null/share-2.png" />
                                <p>connected with 11 users</p>   </div>

                        </div>



                    </div>

                </div>
                <div className={styles.secondary_details_container}>

                    <div className={styles.account_rooms}>
                        <div className={styles.account_section_header}>
                            <img width={"28px"} src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                            <h2>ROOMS</h2>
                        </div>
                        <div>
                            <div>
                                <p className={styles.room_main_text}>You have 27 rooms all together</p>
                                <div className={`${styles.room_type_info_box} `}>
                                    <img width={"30px"} src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/null/external-global-freelancer-xnimrodx-lineal-color-xnimrodx-2.png" />
                                    <p className={`${styles.global_room}`}>12 public</p>
                                </div>
                                <div className={styles.room_type_info_box} >
                                    <img width={"30px"} src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-private-key-privacy-flaticons-flat-flat-icons-2.png" />

                                    <p className={styles.private_room}>15 private</p>
                                </div>
                            </div>
                            <div className={styles.room_list}>
                                <div className={styles.room_item}>
                                    <div className={styles.room_title_box}>
                                        <img width={"18px"} src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                                        <div className={styles.room_title}>


                                            <p className={styles.room_name}>Test Room</p>
                                            <span className={` ${styles.room_type} ${styles.global_room}`}>public</span>
                                        </div>
                                    </div>

                                    <div className={styles.user_connected}>
                                        <span>3 users connected</span>
                                    </div>
                                    <div className={styles.updated}>
                                        <p>last updated :</p>
                                        <span>3 hours ago</span>

                                    </div>
                                </div>
                                <div className={styles.room_item}>
                                    <div className={styles.room_title_box}>
                                        <img width={"18px"} src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                                        <div className={styles.room_title}>


                                            <p className={styles.room_name}>Test Room</p>
                                            <span className={` ${styles.room_type} ${styles.global_room}`}>public</span>
                                        </div>
                                    </div>

                                    <div className={styles.user_connected}>
                                        <span>3 users connected</span>
                                    </div>
                                    <div className={styles.updated}>
                                        <p>last updated :</p>
                                        <span>3 hours ago</span>

                                    </div>
                                </div>
                                <div className={styles.room_item}>
                                    <div className={styles.room_title_box}>
                                        <img width={"18px"} src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                                        <div className={styles.room_title}>


                                            <p className={styles.room_name}>Test Room</p>
                                            <span className={` ${styles.room_type} ${styles.global_room}`}>public</span>
                                        </div>
                                    </div>

                                    <div className={styles.user_connected}>
                                        <span>3 users connected</span>
                                    </div>
                                    <div className={styles.updated}>
                                        <p>last updated :</p>
                                        <span>3 hours ago</span>

                                    </div>
                                </div>
                                <div className={styles.room_item}>
                                    <div className={styles.room_title_box}>
                                        <img width={"18px"} src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                                        <div className={styles.room_title}>


                                            <p className={styles.room_name}>Test Room</p>
                                            <span className={` ${styles.room_type} ${styles.global_room}`}>public</span>
                                        </div>
                                    </div>

                                    <div className={styles.user_connected}>
                                        <span>3 users connected</span>
                                    </div>
                                    <div className={styles.updated}>
                                        <p>last updated :</p>
                                        <span>3 hours ago</span>

                                    </div>
                                </div>
                                <div className={styles.room_item}>
                                    <div className={styles.room_title_box}>
                                        <img width={"18px"} src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                                        <div className={styles.room_title}>


                                            <p className={styles.room_name}>Test Room</p>
                                            <span className={`${styles.room_type} ${styles.private_room}`}>public</span>
                                        </div>
                                    </div>

                                    <div className={styles.user_connected}>
                                        <span>3 users connected</span>
                                    </div>
                                    <div className={styles.updated}>
                                        <p>last updated :</p>
                                        <span>3 hours ago</span>

                                    </div>
                                </div>





                            </div>
                        </div>

                    </div>


                </div>
                <div className={styles.account_friends}>

                    <div className={styles.secondary_details_container}>

                        <div className={styles.account_section_header}>
                            <img width={"28px"} src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                            <h2>FRIENDS</h2>
                        </div>

                        <div>
                            <p className={styles.friends_main_text}>You have 248 friends till the date.</p>
                            <div className={styles.friends_list}>

                                <div className={styles.friends_item}>

                                    <img draggable={'false'} src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.6435-9/152422905_113694587431792_3675893347751725437_n.jpg?stp=c38.0.152.152a_dst-jpg_p228x119&_nc_cat=111&ccb=1-7&_nc_sid=574b62&_nc_ohc=qNm6O7EYruEAX_G3_hj&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfD69HtM-QjPxAXnK9WuUOFdauDo69KcScnzsdW3vuVxZg&oe=640EB104" alt="friend_profile_img" />
                                    <div className={styles.user_primary_details}>
                                        <p className={styles.user_name}>Rajiv Shrestha </p>
                                        <span className={styles.user_email}>rajiv@gmail.com</span>
                                    </div>
                                    <div className={styles.friends_btn}>

                                        Friends

                                    </div>

                                </div>
                                <div className={styles.friends_item}>

                                    <img draggable={'false'} src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.6435-9/152422905_113694587431792_3675893347751725437_n.jpg?stp=c38.0.152.152a_dst-jpg_p228x119&_nc_cat=111&ccb=1-7&_nc_sid=574b62&_nc_ohc=qNm6O7EYruEAX_G3_hj&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfD69HtM-QjPxAXnK9WuUOFdauDo69KcScnzsdW3vuVxZg&oe=640EB104" alt="friend_profile_img" />
                                    <div className={styles.user_primary_details}>
                                        <p className={styles.user_name}>Rajiv Shrestha </p>
                                        <span className={styles.user_email}>rajiv@gmail.com</span>
                                    </div>
                                    <div className={styles.friends_btn}>

                                        Friends

                                    </div>

                                </div>
                                <div className={styles.friends_item}>

                                    <img draggable={'false'} src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.6435-9/152422905_113694587431792_3675893347751725437_n.jpg?stp=c38.0.152.152a_dst-jpg_p228x119&_nc_cat=111&ccb=1-7&_nc_sid=574b62&_nc_ohc=qNm6O7EYruEAX_G3_hj&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfD69HtM-QjPxAXnK9WuUOFdauDo69KcScnzsdW3vuVxZg&oe=640EB104" alt="friend_profile_img" />
                                    <div className={styles.user_primary_details}>
                                        <p className={styles.user_name}>Rajiv Shrestha </p>
                                        <span className={styles.user_email}>rajiv@gmail.com</span>
                                    </div>
                                    <div className={styles.friends_btn}>

                                        Friends

                                    </div>

                                </div>
                                <div className={styles.friends_item}>

                                    <img draggable={'false'} src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.6435-9/152422905_113694587431792_3675893347751725437_n.jpg?stp=c38.0.152.152a_dst-jpg_p228x119&_nc_cat=111&ccb=1-7&_nc_sid=574b62&_nc_ohc=qNm6O7EYruEAX_G3_hj&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfD69HtM-QjPxAXnK9WuUOFdauDo69KcScnzsdW3vuVxZg&oe=640EB104" alt="friend_profile_img" />
                                    <div className={styles.user_primary_details}>
                                        <p className={styles.user_name}>Rajiv Shrestha </p>
                                        <span className={styles.user_email}>rajiv@gmail.com</span>
                                    </div>
                                    <div className={styles.friends_btn}>

                                        Friends

                                    </div>

                                </div>
                                <div className={styles.friends_item}>

                                    <img draggable={'false'} src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.6435-9/152422905_113694587431792_3675893347751725437_n.jpg?stp=c38.0.152.152a_dst-jpg_p228x119&_nc_cat=111&ccb=1-7&_nc_sid=574b62&_nc_ohc=qNm6O7EYruEAX_G3_hj&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfD69HtM-QjPxAXnK9WuUOFdauDo69KcScnzsdW3vuVxZg&oe=640EB104" alt="friend_profile_img" />
                                    <div className={styles.user_primary_details}>
                                        <p className={styles.user_name}>Rajiv Shrestha </p>
                                        <span className={styles.user_email}>rajiv@gmail.com</span>
                                    </div>
                                    <div className={styles.friends_btn}>

                                        Friends

                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </div >
    )
}

export default Account