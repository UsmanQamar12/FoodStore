import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {addToCart, deleteFromCart} from '../actions/cartActions';
import Checkout from '../components/Checkout';


function Cartscreen() {

    const cartstate = useSelector(state=>state.cartReducer);
    const cartItems = cartstate.cartItems;
    var subtotal = cartItems.reduce((x , item)=> x+item.price , 0)
    const dispatch = useDispatch();
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <h2 style={{fontSize: '40px'}}>My Cart</h2>
            {cartItems.map(item=>{
                return  <div className="flex-container">
                <div className='text-left m-1 w-100'>
                    <h1>{item.name} [{item.varient}]</h1>
                    <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                    <h1 style={{display: 'inline'}}>Quantity : </h1>
                    <i className="fa-solid fa-plus" onClick={()=>{dispatch(addToCart(item , item.quantity+1 , item.varient))}}></i>
                    <b>{item.quantity}</b>
                    <i className="fa-solid fa-minus" onClick={()=>{dispatch(addToCart(item , item.quantity-1 , item.varient))}}></i>
                    <hr/>
                </div>
                <div className='m-1 w-100'>
                    <img src={item.image} style={{height: '80px', width: '80px'}}/>
                </div>
                <div className='m-1 w-100'>
                <i className="fa-solid fa-trash mt-5" onClick={()=>{dispatch(deleteFromCart(item))}}></i>


                </div>
            </div>
            })}
           

        </div>

        <div className="col-md-4 text-up">
              <h2 style={{fontSize: '45px'}}>SubTotal : {subtotal} /Rs</h2>
              <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  )
}

export default Cartscreen;
