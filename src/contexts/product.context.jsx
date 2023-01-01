import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json'

export const ProductContext = createContext({
    product: [],

})

export const ProductsProvider = ({children}){
    const [products, setProduct] = useState(PRODUCTS)
    const value = {products}
    return (
        <ProductContext.Provider value={}>{children}</ProductContext.Provider>
    )
}