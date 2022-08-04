import React from 'react';
import "./Order.css";
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';


function Order({ order }) {
    
    

  return (
      <div className='order'>
          <h3>Order Total: ₹{order.data.amount/100 }</h3>
          <p><strong>Ordered on</strong> {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
          <p className='order__id'>
              <small>{order.id}</small>
              
          </p>
          {console.log("ORDER>>>>  ", order)}
          <div >
                {order.data.basket.map((item) => {
                    return <CheckoutProduct                      
                        id={item.id}                      
                        title={item.title}                                       
                        image={item.image}                                      
                        price={item.price}                                     
                        rating={item.rating}
                        hideButton = {true}
                    />             
                })}
            </div>
          
    </div>
  )
}

export default Order