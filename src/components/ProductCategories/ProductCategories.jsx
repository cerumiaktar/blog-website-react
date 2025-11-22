import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCategory from "./ProductCategory";


const ProductCategories = () => {
    const [pCategories, setPCategories] = useState([])

    useEffect(() =>{
        fetch('pCategories.json')
        .then(res=>res.json())
        .then(data=>setPCategories(data))
    } ,[])
    return (
        <div className="container mx-auto mb-12">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-center mb-6">Product Categories</h1>
                <Link to='/products'><p>See all</p></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {
                    pCategories.map((pCategory) =><ProductCategory pCategory={pCategory}></ProductCategory>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;