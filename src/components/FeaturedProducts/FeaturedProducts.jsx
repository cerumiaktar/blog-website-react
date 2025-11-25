import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
    const [FeaturedProducts, setFeaturedProducts] = useState([])

    useEffect(() =>{
        fetch('fProducts.json')
        .then(res=>res.json())
        .then(data=>setFeaturedProducts(data))
    } ,[])
    return (
        <div className="container mx-auto mb-12">
            <div className="flex items-center justify-between dark:text-black">
                <h1 className="text-2xl font-bold text-center mb-6">Featured Products</h1>
                <Link to='/products'><p>See all</p></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {
                    FeaturedProducts.map((featuredProduct) =><FeaturedProduct featuredProduct={featuredProduct}></FeaturedProduct>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;