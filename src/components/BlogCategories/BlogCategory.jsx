

const BlogCategory = ({ blog }) => {
    const { id, img, title } = blog;
    return (
        <div>
            <div className="card bg-base-100 dark:bg-white dark:text-black shadow-2xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default BlogCategory;