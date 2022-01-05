import React from 'react'

const Home = (props) => {
    console.log(" Home props", props)
    return(
        <div>

        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://www.lavamobiles.com/product/z66/images/z66banner.png" />
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
                <button onClick={() => props.addToCartHandler({price:1000, name:'i phone 13'})}>  Add To Cart</button>
                <button className='remove-cart-btn' onClick={() => props.removeToCartHandler()}>  Remove To Cart</button>
            </div>
        </div>
    </div>
    )
}
export default Home