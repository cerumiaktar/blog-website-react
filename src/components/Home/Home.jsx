import Banner from "../Banner/Banner";
import BlogCategories from "../BlogCategories/BlogCategories";
import Blogs from "../Blogs/Blogs";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ProductCategories from "../ProductCategories/ProductCategories";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BlogCategories></BlogCategories>
           <ProductCategories></ProductCategories>
           <FeaturedProducts></FeaturedProducts>
           <Blogs></Blogs>
        </div>
    );
};

export default Home;