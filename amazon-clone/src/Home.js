import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__banner" alt='' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/YY_Red_New_1/V184735168_WLM_Redmi_Note9Pro_DesktopTallHero_1500x600_2_-_Copy._CB404669296_.jpg' />
            <div className='home__rows'>
                <div className='home__row'>
                    <Product
                        id = {1}
                        name = "Bolt Wireless Earbud"
                        price = {44}
                        image = "https://m.media-amazon.com/images/I/515WsHH+IWL._AC_UL320_.jpg"
                        rating = {4}
                    />
                    
                    <Product
                        id = {2}
                        name = "Noise ColorFit NAV Smart Watch with Built-in GPS and High Resolution Display (Camo Green)"
                        price = {4499}
                        image = "https://m.media-amazon.com/images/I/61+6J7wk2+L._AC_UL320_.jpg"
                        rating = {4}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id = {3}
                        name = "Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with ..."
                        price = {2299}
                        image = "https://m.media-amazon.com/images/I/71ZSpNjEl0L._AC_UL320_.jpg"
                        rating = {4}
                    />
                    
                    <Product
                        id = {4}
                        name = "Redmi 9 (Carbon Black, 4GB RAM, 64GB Storage)"
                        price = {8999.00}
                        image = "https://images-eu.ssl-images-amazon.com/images/I/71uZrDPrsRL._AC_UL400_SR300,400_.jpg"
                        rating = {5}
                    />

                    <Product
                        id = {5}
                        name = "Western Digital WD Green 240 GB 2.5 inch SATA III Internal Solid State Drive (WDS240G2G0A)"
                        price = {2800.00}
                        image = "https://images-eu.ssl-images-amazon.com/images/I/51lA7br9YrL._AC_UL270_SR270,270_.jpg"
                        rating = {4}
                    />      
                </div>
                <div className='home__row'>
                    <Product
                            id = {6}
                            name = 'Rife Dual Free-standing Arm Monitor Desktop Mount Stand Adjustable Screens Fit for 10"-30" LCD and LED Displays (Black)'
                            price = {5390.00}
                            image = "https://images-na.ssl-images-amazon.com/images/I/41P9UP20xuL.jpg"
                            rating = {5}
                        />
                </div>
            </div>
        </div>

    )
}

export default Home
