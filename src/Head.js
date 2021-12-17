import React from 'react'
import './Coin.css'


const Head = () => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    {/* <h1>Image</h1> */}
                    {/* <img src={image} alt="Crypto" /> */}
                    <h1>Name</h1>
                    <p className="coin-symbol-2"> Symbol</p>
                </div>
                <div className="coin-data">
                    <h1 className="coin-price-2">Price</h1>
                    <p className="coin-volume">Volume</p>
                    <p className="coin-percent ">Change</p>
                    <p className="coin-marketcap">Mkt Cap</p>       

                        

                </div>
            </div>

            
        </div>
    )
}

export default Head;

