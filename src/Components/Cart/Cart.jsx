import React from 'react'
import './Cart.css'
import ProductItem from '../ProductList/ProductList.jsx'

function Cart({ cartItems, setCartItems }) {
    function calculateTotal() {
        let sum = 0;
        for (let cartItem of cartItems) {
            sum += cartItem.price * cartItem.count;
        }
        return sum;
    }

    function removeItem(itemId) {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
        setCartItems(newCartItems);
    }


    if (cartItems.length == 0) {
        return (
            <div className='empty-cart'>
                <h1>YOUR BAG</h1>
                <p>is currently empty</p>
            </div>
        )
    }

    function updateCount(itemId, count) {
        const newCartItems = [...cartItems];
        for (let cartItem of newCartItems) {
            if (cartItem.id === itemId) {
                cartItem.count = count;
                break;
            }
        }
        setCartItems(newCartItems);
    }

    return (
        <div className='itemsList'>
            <h1>YOUR BAG</h1>
            {cartItems.map((cartItem) => (
                <ProductItem
                    item={cartItem}
                    key={cartItem.id}
                    removeItem={removeItem}
                    decrement={() => {
                        updateCount(cartItem.id, cartItem.count - 1);
                    }}
                    increment={() => {
                        updateCount(cartItem.id, cartItem.count + 1);
                    }}
                />
            ))}
            <div className="total">
                <p>Total: </p>
                <p>{calculateTotal()}</p>
            </div>
            <button className='Clearcart'
                onClick={() => {
                    setCartItems([]);
                }}
            >
                Clear Cart
            </button>
        </div>
    );
}

export default Cart;