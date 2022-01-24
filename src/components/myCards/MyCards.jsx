import React from 'react'
import Card from '../cards/Card'
import TransactionHistory from '../transactionHistory/TransactionHistory'
import './myCards.style.css'

export default function MyCards() {
    return (
        <div className='allCards2'>
        <div className='allCards'>
            
                <div>
                    <h1>cards</h1>
                    <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                    <hr></hr>
                    <br></br>
                </div>
                <Card/>
                <TransactionHistory/>
            </div>
        </div>
    )
}
