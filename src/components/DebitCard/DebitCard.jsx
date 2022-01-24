import React from 'react'
import DebitCardDetails from '../DebitCardDetails/DebitCardDetails'
import cardLogo from '../../assets/credit-card-removebg-preview.png'
import pen from '../../assets/signature-removebg-preview.png'
import DebitCardStyle from './debitCard.module.scss'
// import TransactionHistory from '../transactionHistory/TransactionHistory'


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
];


export default function DebitCard() {
    return (
        <div className={DebitCardStyle.container}>
            <div className={DebitCardStyle.debitCardContainer}>
            <div>
                <h3>Debit card</h3>
                <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
            </div>
            <hr></hr>
            <br></br>
            <div className={DebitCardStyle.card2}>
                <div className={DebitCardStyle.card2Con}>
                    <h3>150 000 UAH</h3>
                    <img src={pen} alt='' width={20} height={20}/>
                </div>
                
                <p>2132 2873 22347 3478</p>
                <div className={DebitCardStyle.card2Date}>
                    <p>07/20</p>
                    <img src={cardLogo} alt='' width={32} height={22}/>
                </div>
            </div>
            <div className={DebitCardStyle.tranc}>
                <div>
                {
                    transactions.map(({img,details,details2,amount,currency,accName})=> {
                        return (
                        
                        <div className={DebitCardStyle.flex} key={details}>
                            <div className={DebitCardStyle.img}><img src={img} alt=''/></div>
                            <div className={DebitCardStyle.details}>{details}<span>{accName}</span><p>{details2}</p></div>
                            <div className={DebitCardStyle.amount}>{amount}</div>
                            <div className={DebitCardStyle.currency}>{currency}</div>
                        </div>
                        )
                    
                    })
                }
                </div>
                <div>
                <DebitCardDetails/>
                </div>
            </div>
        </div>
        </div>
        
    )
}
