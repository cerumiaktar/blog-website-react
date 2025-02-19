import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then (data =>setBlogs(data))
    } ,[])
    return (
        <div className="container mx-auto mt-12">
            <h1 className="text-2xl font-medium text-center mb-6">Recent Blogs</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                   blogs.map(blog =><Blog blog = {blog}></Blog>) 
                }
            </div>
        </div>
    );
};

export default Blogs;