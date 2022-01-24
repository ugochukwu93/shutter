
import React from 'react'
import Categories from '../CategoriesFillter/Categories'
import transactionHistoryStyle from './TransactionHistory.module.scss'



export default function TransactionHistory() {
    const transactions = [
        {
            img: require("../../assets/Group 1.png"),
            details: "Food & Drink restaurant",
            details2: "Cafe and restaurants Card: ** 7813",
            amount: -480,
            currency: "UAH"
        },
        {
            img: require("../../assets/Group 14.png"),
            details: "Walmart store (Main Str. 13)",
            details2: "Cafe and restaurants Card: ** 7813",
            amount: - 80,
            currency: "USD"
        },
        {
            img: require("../../assets/Grup 14.png"),
            details: "Transfer from ",
            accName: "Alexey",
            details2: "Cafe and restaurants Card: ** 7813",
            amount: 6000,
            currency: "UAH"
        },
    ]
    return (
        <div className={transactionHistoryStyle.container}>
            <div className={transactionHistoryStyle.header}>
                <div>
                    <h2>Activity</h2>
                </div>
                <div>
                    <Categories/>
                </div>
            </div>
            {
                transactions.map(({img,details,details2,amount,currency,accName})=> {
                    return (
                       
                       <div className={transactionHistoryStyle.flex} key={details}>
                           <div className={transactionHistoryStyle.img}><img src={img} alt=''/></div>
                           <div className={transactionHistoryStyle.details}>{details}<span>{accName}</span><p>{details2}</p></div>
                           <div className={transactionHistoryStyle.amount}>{amount}</div>
                           <div className={transactionHistoryStyle.currency}>{currency}</div>
                       </div>
                    )
                   
                })
            }
            
        </div>
    )
}
