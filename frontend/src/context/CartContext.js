import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    // find the theme value from the local storage if it exists.
    // If it doesn't exist, set it to light.
    let local_cart = localStorage.getItem("cart");
    if (local_cart === null) {
        localStorage.setItem("cart", "[]");
        local_cart = "[]";
    } else {
        // parse the string to a JSON object
        local_cart = JSON.parse(local_cart);
    }

    const [cart, setCart] = useState(local_cart);

    const addToCart = (item) => {
        // item has the following structure:
        // {
        //     id: 1,
        //     name: "Product 1",
        //     price: 100,
        //     quantity: 1,
        // }


        // check if the item is already in the cart
        // card is a list
        // item is a dictionary

        if (cart.length === 0) {
            // if the cart is empty, add the item to the cart
            cart.push(item);
        } else {
            // if the cart is not empty, check if the item is in the cart
            let found = false;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === item.id) {
                    // if the item is in the cart, increase the quantity
                    cart[i].quantity += 1;
                    found = true;
                    break;
                }
            }
            if (!found) {
                // if the item is not in the cart, add the item to the cart
                cart.push(item);
            }
        }

        // set the cart in the local storage
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const removeFromCart = (item) => {
        // item has the following structure:
        // {
        //     id: 1,
        //     name: "Product 1",
        //     price: 100,
        //     quantity: 1,
        // }

        // check if the item is already in the cart
        // card is a list
        // item is a dictionary

        if (cart.length === 0) {
            return;
            // if the cart is empty, do nothing
        } else {
            // if the cart is not empty, check if the item is in the cart
            let found = false;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === item.id) {
                    // if the item is in the cart, decrease the quantity
                    cart[i].quantity -= 1;
                    if (cart[i].quantity === 0) {
                        // if the quantity is 0, remove the item from the cart
                        cart.splice(i, 1);
                    }
                    found = true;
                    break;
                }
            }
            if (!found) {
                // if the item is not in the cart, do nothing
            }
        }

        // set the cart in the local storage
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    return (
        <CartContext.Provider value={{
            cart, addToCart: addToCart, removeFromCart: removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
