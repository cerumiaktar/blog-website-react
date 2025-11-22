import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCategory from "./BlogCategory";


const BlogCategories = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('bCategories.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    } ,[])

    return (
        <div className="container mx-auto mt-12">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-center mb-6">Blogs Categories</h1>
                <Link to='/blogs'><p>See all</p></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {
                    blogs.map((blog) =><BlogCategory blog={blog}></BlogCategory>)
                }
            </div>
        </div>
    );
};

export default BlogCategories;