import React from 'react'
import './DebitCardDetails.styles.css'

const cardInfo = [
    {cardName: "Chris Jombo",
    cardNo: 4685885266465242,
    cvv: 133,
    zipCode: 23401,
    address: "19, Olubunmi Rotimi, Lekki, Lagos",
}
]

export default function DebitCardDetails() {
    return (
        <div className='cardInfoContainer'>
            <h3>Card Info</h3>
            {
                cardInfo.map(({cardName,cardNo,address,cvv,zipCode})=> {
                    return (
                        <div>
                            <div className='cardInfo'>
                                <div>Card Name</div>
                                <div>{cardName}</div>
                            </div>
                            <div className='cardInfo'>
                                <div>Card No</div>
                                <div>{cardNo}</div>
                            </div>
                            <div className='cardInfo'>
                                <div>Cvv</div>
                                <div>{cvv}</div>
                            </div>
                            <div className='cardInfo'>
                                <div>Zip code</div>
                                <div>{zipCode}</div>
                            </div>
                            <div className='cardInfo'>
                                <div>Address</div>
                                <div>{address}</div>
                            </div>
                            
                        </div>    
                    )
                })
            }
            
        </div>
    )
}
