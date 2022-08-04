import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    



    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />
            

            {basket?.length===0 ?(
                <div className="checkout__title">
                    <h2>Your Shopping Basket is empty</h2>
                    <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.</p>
                </div>):(
                        <div className="checkout__title">
                            <div className='border'>
                                <h2 >Your Shopping Basket</h2>
                            </div>
                            
                            {basket.map(item => (
                                        <CheckoutProduct
                                        id = {item.id}
                                        title = {item.title}
                                        image = {item.image}
                                        price = {item.price}
                                        rating = {item.rating}
                                        />
                                        ))}
                            
                       
                        
                    </div>
                )}
           
            </div>

            <div className="checkout__right">

                <Subtotal />
               
            </div>
        </div>
    )
}

export default Checkout
