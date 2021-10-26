import React from 'react';

import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""/>

            {/* products(id, title, price, rating, image) */}
            {/* product */}
            <div className="home__row">
                <Product 
                    id={1} 
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    rating={5} 
                />
                <Product 
                    id={2} 
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    rating={5} 
                />
            </div>
            <div className="home__row">
                <Product 
                    id={3} 
                    title="Samsung HT-J5100K/XL 5.1 channel Home Theater System"
                    price={11.96}
                    image="https://www.reliancedigital.in/medias/Samsung-HT-J5100K-XL-5.1-channel-Home-Theatre-System-491189559-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1Mzg3NHxpbWFnZS9qcGVnfGltYWdlcy9oNDUvaDg1Lzg5Mjk0NzU4MjE1OTguanBnfDI1MmYzOGZhMmJjMTg1ZWQ2ODBjYjA1Zjk2MDM0YmZhZWYxMGJlOGU4MGI3NGY0MTNjNDQ1MDM2YWQzZDE2ZDg"
                    rating={2} 
                />
                <Product 
                    id={4} 
                    title="TP-Link 16 Port Gigabit Ethernet Network Switch | Desktop"
                    price={11.96}
                    image="data:image/jpeg;base64,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"
                    rating={5} 
                />
                <Product 
                    id={5} 
                    title="Fitbit Versa 2 Smart Watch, Black/Carbon Aluminium"
                    price={11.96}
                    image="https://www.reliancedigital.in/medias/Fitbit-FB507BKBK-Smart-Watches-491615008-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzU1NnxpbWFnZS9qcGVnfGltYWdlcy9oNTkvaDk4LzkyMTIyOTc4MDU4NTQuanBnfDc3NGQzNDAwZmM2YTcwMjM0MTY4OGI5MmI1YTZjNjgzOWI0ZWVhNjIwMzI3Y2YwNTQwODU5ODJjZWIyMmM1OWE"
                    rating={3} 
                />
            </div>
            <div className="home__row">
                <Product 
                    id={6} 
                    title="One Plus 138.8 cm (55 inch) Ultra HD (4K) QLED Smart TV, Q1 55Q1"
                    price={11.96}
                    image="https://www.reliancedigital.in/medias/One-Plus-55-Q1-Televisions-491630449-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzI3NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVjL2gwNi85Mjk3NTkyMjIxNzI2LmpwZ3wzMjhhZWY0YmRiZjY2NWNiOWVlOTVmZjhiYTI4YTZkZTZjNzE2NDJjMWM5NzJkN2UwZWVhZWJhMDc5NTk5NzA2"
                    rating={4} 
                />
            </div>
        </div>
    )
}
export default Home;