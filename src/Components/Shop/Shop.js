import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css';



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);



    //from products.json
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    //from fakedb.js

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCard = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCard.push(addedProduct);
            }
        }
        setCart(saveCard);


    }, [products]);

    const buttonHandler = (selectedProduct) => {

        /* const exists = cart.find(prod => prod.id === product.id);
         if (!exists) {
             product.id = 1;
             newCart = [...cart, prod]
             console.log(exists)
         }
         else {
             const rest = cart.filter(prod => prod.id !== product.id);
             exists.quantity = exists + 1;
             newCart = [...rest, exists]
         }*/
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (exists) {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        else {
            selectedProduct.id = 1;
            newCart = [...cart, selectedProduct];
        }



        // newCart = [...cart, product];
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        buttonHandler={buttonHandler}
                        product={product}></Product>)

                }
            </div>

            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>

        </div >
    );
};

export default Shop;