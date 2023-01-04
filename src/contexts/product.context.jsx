import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data";
import { addCollectionAndDocument } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
    products: [],

})

export const ProductsProvider = ({children}) => {
    const [products, setProduct] = useState([])
    
    const value = {products}
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}