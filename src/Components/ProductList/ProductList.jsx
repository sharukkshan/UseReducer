import React from 'react'
import './ProductList.css'

function ProductList({ item, removeItem, increment, decrement }) {
    return (
        <div className="card">
            <div className='img-details'>
                <div className="img-div">
                    <img src={item.imgPath} alt="" />
                </div>
                <div className="details">
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <button className='removebtn'
                        onClick={() => {
                            removeItem(item.id);
                        }}
                    >
                        remove
                    </button>
                </div>
            </div>
            <div>
                <button onClick={increment}>+</button>
                {item.count}
                <button onClick={decrement}>-</button>
            </div>
        </div>
    );
}

export default ProductList