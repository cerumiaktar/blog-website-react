

const FeaturedProduct = ({ featuredProduct }) => {
    const { id, img, title, rating, price } = featuredProduct;
    return (
        <div>
            <div className="card bg-base-100 text-center dark:shadow-gray-50 shadow-sm h-[450px]">
                <figure>
                    <img className="w-full"
                        src={img}
                        alt="products" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <p className="text-lg text-[#F96001]">{rating}</p>
                    {/* <div className="rating rating-xs mx-auto">
                        <div className="mask mask-star bg-orange-400" aria-label="1 star"></div>
                        <div className="mask mask-star bg-orange-400" aria-label="2 star"></div>
                        <div className="mask mask-star bg-orange-400" aria-label="3 star" ></div>
                        <div className="mask mask-star bg-orange-400" aria-label="4 star"></div>
                        <div className="mask mask-star bg-orange-400" aria-label="5 star" aria-current="true"></div>
                    </div> */}
                    <p className="text-xl font-semibold">${price}</p>
                    <div className="card-actions">
                        <button className="btn w-full md:w-full bg-black text-white text-lg dark:border-white dark:bg-transparent">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;