

const Banner = () => {
    return (
        <div className="container mx-auto mt-12">
            <div
                class="hero h-[600px] rounded-2xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/TxcmxxDp/banner.png)",
                }}>
                {/* <div className="hero-overlay"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-8/12">
                        <h1 className="mb-5 text-5xl font-bold">Effective Office Culture Building a Strong Corporate Foundation</h1>
                        <button className="btn text-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;