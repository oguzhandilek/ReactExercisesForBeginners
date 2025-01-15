import React, {  createContext, useReducer, useState } from "react";
import ProductList from "../components/shoppingCart/ProductList";
import ProductItem from "../components/shoppingCart/ProductItem";
import { Outlet } from "react-router-dom";


export const CartContext=createContext()
export default function ShoppinCart() {
 const [category,setCategory]=useState("All")

 
  return (
    <>
     <ProductList category={category} setCategory={setCategory}/>
  
    </>
  );
}
