import React from 'react'
import homeIcon from '../../assets/home-removebg-preview.png'
import card from '../../assets/credit-card-removebg-preview.png'
import logoutIcon from '../../assets/Path 11.svg'
import DashboardNavStyle from './DashboardNav.module.scss'
// import Dashboard from '../dashboard/Dashboard'
import {Link, Outlet } from 'react-router-dom'

export default function DashboardNav() {
    return (
        <div className={DashboardNavStyle.navContainer}>
            <div className={DashboardNavStyle.navBar}>
                <ul>
                <Link to="/dashboardHome/dashboard" style={{ color: 'inherit', textDecoration: 'inherit', marginBottom: 350}}>
                    <li><img src={homeIcon} width={15} alt=''/><span>Dashboard</span></li>
                    </Link>
                    <Link to="/dashboardHome/cards" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <li><img src={card} width={15} alt=''/><span>My cards</span></li>
                    </Link>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <li><img src={logoutIcon} width={10} alt=''/><span>Logout</span></li>
                    </Link>
                </ul>
            </div>
            <div>
                 {/* <Dashboard/> */}
                 <Outlet/>
            </div>
        </div>
        
    )
}
