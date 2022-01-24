import { useRoutes } from 'react-router-dom'
import React from 'react'
import CreateAcc from '../createAcc/CreateAcc'
// import Dashboard from '../dashboard/Dashboard'
import DashboardNav from '../dashboardNav/DashboardNav'
// import Card from '../cards/Card'
import MyCards from '../myCards/MyCards'
import Dashboard from '../dashboard/Dashboard'
import DebitCard from '../DebitCard/DebitCard'

export default function Route() {
    const element = useRoutes([
        {path:'/', element:<CreateAcc/>},
        {path:'dashboardHome', element:<DashboardNav/>,
    children:[
        {path:'cards', element:<MyCards/>},
        {path:'dashboard', element:<Dashboard/>},
        {path:'debitcard', element:<DebitCard/>}
    ]}
    ])
    return element
}
