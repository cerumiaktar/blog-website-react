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
            <div
                class="hero h-[200px] mb-12 mt-12 rounded-xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/m5TPYrNK/Frame-89.png)",
                }}>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">All Blogs</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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