import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    } ,[])
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-medium text-center mb-6 mt-6">All Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    products.map(product =><Product product ={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;