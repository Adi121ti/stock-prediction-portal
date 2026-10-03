import React from 'react'
import Button from './Button'

const Main = () => {
    return (
        <>
            <div className='container'>
                <div className='p-5 text-center bg-light-dark' >
                    <h1 className='text-light'>STOCK PREDICTION PORTAL</h1>
                    <p className='text-light lead'>A stock prediction portal is an online platform that uses artificial intelligence (AI) and machine learning algorithms to forecast future share prices. These portals analyze historical market data, chart patterns, and financial news to help investors make data-driven trading decisions. While they offer valuable insights, users should treat their predictions as analytical tools rather than guaranteed outcomes due to market volatility.</p>
                    <Button text ="Login" class ="btn-outline-info"/>
                </div>
            </div>
        </>
    )
}

export default Main