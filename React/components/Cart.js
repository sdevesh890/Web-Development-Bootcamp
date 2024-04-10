import React from "react";
import {useSelector , useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>
{
    const cartItem = useSelector(store => store.cart.items);
    const dispatch = useDispatch(); 
    const handleCart = ()=>
    {
        dispatch(clearCart());
    }
    return(
        <div className="restaurant-menu">
          <div className="Menubtn">
            <button onClick={()=> handleCart()}>Clear Cart</button>
          </div>
        <div className="restaurant-details">
        </div>
        <div className="menu-section">
          <div className="menu-items">
            {cartItem.map((item) => (
              <div key={item?.id} className="menu-item">
                <div className="item-details">
                  <h3>{item?.name}</h3>
                  <p>
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    );

}

export default Cart;