import React from 'react'
import { Link } from "react-router-dom";
import card from"./cards.module.scss"
import pen from '../../assets/signature-removebg-preview.png'
export default function Card(props) {
    const cards = [
        {
            currency: '150 000 UAH',
            cardNum: '2132 2873 22347 3478',
            expireDate: "07/20",
            cardLogo: require("../../assets/money-removebg-preview.png"),
            id: 1
        },
        {
            currency: '8 305 EUR',
            cardNum: '8346 5248 6232 7813',
            expireDate: "07/20",
            cardLogo: require("../../assets/credit-card-removebg-preview.png"),
            id: 2
        },
        {
            currency: '12 180 USD',
            cardNum: '5438 2343 0474 7324',
            expireDate: "07/20",
            cardLogo:  require("../../assets/symbols-removebg-preview.png"),
            id: 3
        },
    ]
    return (
        <div className={card.container}>
            {
                cards.map(({ currency,expireDate,cardNum,cardLogo,id})=> {
                    return (
                        <Link to="/dashboardHome/debitcard" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <div className={card.card2} key={id}>
                            <div className={card.card2Con}>
                                <h3>{currency}</h3>
                                <img src={pen} alt='' width={20} height={20}/>
                            </div>
                            
                            <p>{cardNum}</p>
                            <div className={card.card2Date}>
                                <p>{expireDate}</p>
                                <img src={cardLogo} alt='' width={32} height={22}/>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
            
                        
        </div>
    )
}
