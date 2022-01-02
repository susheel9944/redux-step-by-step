import React from 'react'

const Home = () => {
    return(
        <div>
        <div className='add-to-cart'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"  alt='add to cart'/>
        </div>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://www.pinclipart.com/pindetail/iiJbhiT_smartphone-mobile-png-image-background-iphone-x-clear/" />
            </div>
            <div className="text-wrapper item">
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className="btn-wrapper item">
                <button>  Add To Cart</button>
            </div>
        </div>
    </div>
    )
}
export default Home