import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from "./axios";
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { db } from './firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(null);
    const [succeeded, setSucceeded] = useState("");
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [clientSecret, setClientSecret] = useState("");
   
   
    useEffect(() => {  
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            console.log("This is use effect from PAYMENT.JS getClient function");
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            console.log( "This is shit>>>>");
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket]);

    console.log("The Client secret is >>>>>>>>", clientSecret);

   
    
    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
                .collection("users")
                .doc(user?.uid)
                .collection("orders")
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
                 
            console.log("Hello you are in Payload Payment Intent");
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            console.log("This is use effect from PAYMENT.JS handleSubmit then");
            
            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })

    }
    const handleChange = (event) => {
        
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    };

  return (
      <div className='payment'>
          <div className='payment__container'>
              <h2 className='payment__heading'>
                  Checkout(
                  <Link to="/checkout">{ basket.length } items</Link>
                  )
              </h2>
              <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                      </div>
                  
                  <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Paliganj, Manhar mohalla, Jai Hind Chowk</p>
                        <p>Patna, IN</p>
                    </div>
              </div>
              <div className='payment__section'>
                  <div className='payment__title'>
                        <h3>Review items and delivery </h3>
                  </div>
                  
                  <div className='payment__items'>
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
                  

              </div>
              <div className='payment__section'>
                    <div className='payment__title'>
                         <h3>Payment Method</h3>
                      </div>
                  
                  <div className='payment__cardDetails'>
                      <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange} />
                          
                          <div className='payment__orderTotal'>
                          <CurrencyFormat
                                renderText = {(value) => (
                                    <>
                                    <p>
                                        Order total: <strong>{value}</strong>

                                    </p>
          
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"₹"}
                                />
                          </div>

                          <button disabled={disabled || processing || succeeded}>
                              Buy Now
                          </button>
                      </form>
                      {error ? <div>{error}</div> : null }
                      
                      
                  </div>
              </div>

          </div>
          
    </div>
  )
}

export default Payment