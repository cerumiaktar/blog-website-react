

const Product = ({ product }) => {
    const { img, title, rating, price } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm h-[550px]">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="rating">
                        <div className="mask mask-star bg-orange-400" aria-label="1 star"></div>
                        <div className="mask mask-star bg-orange-400" aria-label="2 star"></div>
                        <div className="mask mask-star bg-orange-400" aria-label="3 star" ></div>
                        <div className="mask mask-star bg-orange-400" aria-label="4 star"></div>
                        <div className="mask mask-star bg-orange-400" aria-label="5 star" aria-current="true"></div>
                    </div>
                    <p className="text-xl font-semibold">{price}</p>
                    <div className="card-actions ">
                        <button className="btn w-full bg-black text-white text-lg">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;