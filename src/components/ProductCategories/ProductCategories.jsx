import { Link } from "react-router-dom";


const ProductCategories = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-center mb-6">Product Categories</h1>
                <Link to='/products'><p>See all</p></Link>
            </div>
        </div>
    );
};

export default ProductCategories;