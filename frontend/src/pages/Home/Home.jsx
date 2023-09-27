import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Layout/Navbar/Navbar'
import SideList from '../../Layout/SideList/SideList'
import styles from "./Home.module.css"
const Home = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className={styles.homeContentWrapper}>
                <SideList />
                <div className={styles.mainContent}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home