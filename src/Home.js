import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" 
                />

                <div className="home__row">
                    <Product 
                    id="123"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price= {29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="456"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
                    price= {239.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/91fUSbuoAkL._AC_SL1500_.jpg"
                    rating={5}
                    />
                </div>

                <div className="home__row">
                <Product 
                    id="789"
                    title="Lambs & Ivy Woodland Forest Plush Bear Stuffed Animal Toy - Oscar"
                    price= {16.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71%2BOa86xrEL._SL1500_.jpg"
                    rating={2}
                    />
                    <Product 
                    id="741"
                    title="MorisMos Giant Teddy Bear with Big Footprints Plush Stuffed Animals Light Brown 39 inches"
                    price= {38.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/614OYFbp4DL._AC_SL1000_.jpg"
                    rating={3}
                    />
                    <Product 
                    id="852"
                    title="GUND Toothpick Teddy Bear Stuffed Animal Soft Plush, Beige, 15"
                    price= {15.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/71IRW8--NxL._AC_SL1500_.jpg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                <Product 
                    id="963"
                    title="VIOTEK GNV29CB Ultrawide Curved 29-Inch Gaming Monitor | 120Hz UWFHD 21:9 w/Immersive 1200R VA Panel | FreeSync, G-SYNC-Compatible | 3-Year Warranty, 0-Tolerance Dead Pixel Policy (VESA)"
                    price= {249.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81hZ7jc1rwL._AC_SL1500_.jpg"
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
