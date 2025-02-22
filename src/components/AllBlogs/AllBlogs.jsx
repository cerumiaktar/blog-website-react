import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])
    return (
        <div className="container mx-auto mb-12">
            <h1 className="text-2xl font-medium text-center mt-6 mb-6">All Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    allBlogs.map(allBlog => <AllBlog allBlog={allBlog}></AllBlog>)
                }
            </div>
            <div className="flex justify-center mt-8">
                <div className="join">
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="1"
                        defaultChecked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn  btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;