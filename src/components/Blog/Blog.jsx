

const Blog = ({ blog }) => {
    const { cover, title, short_description, author_img, author, publishing_date } = blog;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm border border-[#CCCCCC]">
                <figure>
                    <img
                        src={cover}
                        alt="blogs" />
                </figure>
                <div className="card-body space-y-3">
                    <div className="flex items-center gap-4">
                        <img className="w-12" src={author_img} alt="" />
                        <div>
                            <h2 className="text-base font-medium">{author}</h2>
                            <p className="text-xs">{publishing_date}</p>
                        </div>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p className="leading-7 text-[#333333] dark:text-[#b4b4b4]">{short_description}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;