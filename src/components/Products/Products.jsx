import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container mx-auto">
            <div
                class="hero h-[200px] mb-12 mt-12 rounded-xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/m5TPYrNK/Frame-89.png)",
                }}>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">All Product</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="text-center ">
                <button className="btn mb-12 border border-black hover:bg-black hover:text-white">Load more</button>
            </div>
        </div>
    );
};

export default Products;