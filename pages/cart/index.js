import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Header from '../components/header/Header';
import { deleteAll, removefromcart } from '../../redux/slice/addtocart';

export default function Cart() {
  const count = useSelector((state) => state.cart.cart);
  const [cartitem, setCartItem] = useState();
  const dispatch = useDispatch();
  const removeitem = (item) => {
    dispatch(removefromcart(item));
  };

  return (
    <>
      <Header />
      <div className="container-fluid cart-wrapper">
        {count.map((item, index) => (
          <div className="flex cart" key={index}>
            <div className="image" key={index}>
              <figure>
                <Image src={item.pic} alt="item.title" />
              </figure>
            </div>
            <div className="content-cart flex">
              <div className="left">
                <h4>{item.title}</h4>
                <p>Size: {item.sizeOfProduct}</p>
                <p>Quantity: {item.quantity}</p>
                <p className="remove" onClick={() => removeitem(item)}>
                  Remove
                </p>
              </div>
              <div className="right">
                <p>Price: {item.price}</p>
                <button className="cartbtn">CheckOut</button>
              </div>
            </div>
          </div>
        ))}
        <button className="cartbtn" onClick={() => dispatch(deleteAll())}>
          Clear Cart
        </button>
      </div>
    </>
  );
}
