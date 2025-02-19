

const Blog = ({ blog }) => {
    const { cover, title, short_description, author_img, author, publishing_date } = blog;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={cover}
                        alt="blogs" />
                </figure>
                <div className="card-body">
                    <div>
                        <img src={author_img} alt="" />
                        <div>
                            <h2>{author}</h2>
                            <p>{publishing_date}</p>
                        </div>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p className="leading-7 text-[#333333]">{short_description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;