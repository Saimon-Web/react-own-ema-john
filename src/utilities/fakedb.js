// use local storage to manage cart data


const addToDb = (id) => {
    let shoppingCart = {};

    const sotredCart = localStorage.getItem('shoping-cart');
    if (sotredCart) {
        shoppingCart = JSON.parse(sotredCart);
    }
    else {
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shoppingCart));
}



//another function get cart for shoew ui display
const getStoredCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}














/*
const addToDb = id => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    // const storedCart = localStorage.getItem('shopping-cart');
    // if (storedCart) {
    //     shoppingCart = JSON.parse(storedCart);
    // }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}



*/



const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}



const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, removeFromDb, getStoredCart,
    deleteShoppingCart
}