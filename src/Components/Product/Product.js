import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'


const Product = (props) => {
    const { product } = props;

    return (
        <div className='Product'>
            <img src={product.img} alt="" />
            <div className='product-info'>
                <h3>{product.name}</h3>
                <p>Price:{product.price}</p>
                <p>Rating:{product.ratings}</p>
                <p>Category:{product.category}</p>
            </div>
            <button onClick={() => props.buttonHandler(product)} className='btn-cart'>Add to Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;