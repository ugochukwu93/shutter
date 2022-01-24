import React from 'react'
import carouselStyle from '../carousel/HomeCarousel.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/atm-machine (1).svg"
import img2 from "../../assets/bank.svg"
import img3 from "../../assets/surface1.svg"



export default function HomeCarousel() {

    return (
        <div>
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} className={carouselStyle.carousel}>
                <div>
                    <img src={img3} alt='' height="300px" width="116.8px" className={carouselStyle.carouselImg}/>
                    <div className={carouselStyle.carouselText}>
                        <h2>Pay with card</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                    </div>
                   
                </div>
                <div>
                    <img src={img2} alt=''  height="300px"  width="116.8px" className={carouselStyle.carouselImg}/>
                    <div className={carouselStyle.carouselText}>
                        <h2>Grow your funds</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                    </div>
                </div>
                <div>
                    <img src={img1} alt=''  height="300px"  width="116.8px" className={carouselStyle.carouselImg}/>
                    <div className={carouselStyle.carouselText}>
                        <h2>Pay anywhere anytime</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}