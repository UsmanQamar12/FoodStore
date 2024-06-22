import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Loading from './Loading';
import Success from './Success';
import Error from './Error';


function Checkout({subtotal}) {

    const orderstate = useSelector((state) => state.placeOrderReducer);
    const {loading , error , success} = orderstate;
    const dispatch = useDispatch();

    function tokenHander(token){
        console.log(token);
        dispatch(placeOrder(token , subtotal));
    }

  return (
    <div>

      {loading && (<Loading/>)}
      {error && (<Error error='Something went wrong'/>)}
      {success && (<Success success='Your Order Placed Successfully'/>)}

      <StripeCheckout 
         amount={subtotal*100}
         shippingAddress
         token={tokenHander}
         stripeKey='pk_test_51OhE1JJWKJDCtoAlAaXleL3Ni37Mjzp1AcQASZBBktsbDI8qpnR7HmO6mTGGtPt0YWWNRr2WIZPyETFAvrpNmxK200SsOpPsbO'
         currency='PKR'
        >

        <button className="btn">Pay Now</button>

      </StripeCheckout>
    </div>
  )
}

export default Checkout;
