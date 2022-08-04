import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className = "home__container">
                <img 
                className="home__image"
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt = ""
                />
            

            <div className = "home__row">
            <Product 
                  id="6969691"
                  title="Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately"
                  image="https://m.media-amazon.com/images/I/810u0wy9z7L._SY741_.jpg"
                  rating={4}
                  price={17999}
              />
              <Product
                  id="6969692"
                  title="Zeel Clothing Women's Silk Semi stitched Lehenga Choli (7035_Peach_Free Size)"
                  image="https://m.media-amazon.com/images/I/9117U3htP5L._UY550_.jpg"
                  rating={3}
                  price={6999}
              />
                
                
            </div>
            
            <div className = "home__row">
                    <Product 
                        id="6969693"
                        title="SKYBAGS Boho with RAIN Cover Blue Casual Backpack 23L"
                        image="https://m.media-amazon.com/images/I/419XQVMP38L._SY450_.jpg"
                        rating={5}
                        price={1689}
                    />
                
                <Product 
                    id="6969694"
                    title="SIRIL Women's Bandhani Printed & Embroidery Work In Lace Georgette Saree with Unstitched Blouse Piece"
                    image="https://m.media-amazon.com/images/I/71XAzGJXvkL._UY879_.jpg"
                    rating={3}
                    price={2088}
                />

                <Product 
                    id="6969695"
                    title=" Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 512GB SSD Storage"
                    image="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
                    rating={3}
                    price={101108} 
                />
            </div>

            <div className = "home__row">
                <Product 
                    id="6969696"
                    title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Charcoal Black)"
                    image="https://images-eu.ssl-images-amazon.com/images/I/41lQan54SPL._SX300_SY300_QL70_FMwebp_.jpg"
                    rating={4}
                    price={2999}
                />
            </div>

            
        </div>
        </div>
    )
}

export default Home
