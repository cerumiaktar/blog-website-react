import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PopularProduct from "./PopularProduct";


const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() =>{
        fetch('pProducts.json')
        .then(res=>res.json())
        .then(data=>setPopularProducts(data))
    } ,[])

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between dark:text-black">
                <h1 className="text-2xl font-bold text-center mb-6">Popular Product</h1>
                <Link to='/products'><p>See all</p></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {
                    popularProducts.map((popular)=><PopularProduct popular={popular}></PopularProduct>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;