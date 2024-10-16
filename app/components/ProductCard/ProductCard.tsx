// "use client"; //makes entire component a client component, by this we tells the compiler to include this file as js bundle
import React from "react";
import AddToCart from "../AddtoCart/AddToCart";
// import styles from "./ProductCard.module.css";

const ProductCard = () => {
    return (
        // <div className={styles.card}>
        <div className='p-5 my-5 bg-gray-400 text-white text-xl hover:bg-gray-500 hover:cursor-pointer'>
            {/* <button onClick={() => console.log("Click")}>Add to Cart</button> */}
            <AddToCart />
        </div>
    );
};

export default ProductCard;
