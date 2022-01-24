import React from 'react'
import Card from '../cards/Card'
// import DashboardNav from '../dashboardNav/DashboardNav'
import dashboardStyle from './Dashboard.module.scss'
import TransactionHistory from '../transactionHistory/TransactionHistory'

export default function Dashboard() {
    return (
        <div className={dashboardStyle.container}>
            {/* <DashboardNav/> */}
            <div className={dashboardStyle.dashboardHome}>
                <div className={dashboardStyle.dashboardCon}>
                    <h2>Dashboard</h2>
                    <p>Sed ut gfhfhfhgssgsshhkdkd</p>
                    <hr></hr>
                    <br></br>
                    <div className={dashboardStyle.card}>
                        <div className={dashboardStyle.card1}>
                            <p>Total Available balance</p>
                            <h2>$25,958,485</h2>
                            <div className={dashboardStyle.buttonCon}>
                                <button>Fund wallet</button>
                                <button>Withdraw wallet</button>
                            </div>
                        </div>
                        <Card/>
                    </div>
                    <TransactionHistory/>
                </div>
            </div>
        </div>
    )
}
