import Banner from "../Banner/Banner";
import BlogCategories from "../BlogCategories/BlogCategories";
import Blogs from "../Blogs/Blogs";
import ProductCategories from "../ProductCategories/ProductCategories";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BlogCategories></BlogCategories>
           <ProductCategories></ProductCategories>
           <Blogs></Blogs>
        </div>
    );
};

export default Home;