

const Contact = () => {
    return (
        <div className="mb-12 mt-12 container mx-auto border border-[#666666] rounded-2xl py-8">
            <h1 className="text-2xl font-medium text-center mb-6">Contact</h1>
            <div className="mt-20 mb-20">
                <div className="flex flex-col space-y-6 ">
                    <input type="text" placeholder="Name" className="input mx-auto input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Phone Number" className="input mx-auto input-bordered w-full max-w-lg" />
                    <input type="email" placeholder="Email" className="input mx-auto input-bordered w-full max-w-lg" />
                    <input type="submit" placeholder="Submit" className="input mx-auto bg-black text-white text-lg dark:bg-white dark:text-black dark:border-none input-bordered w-full max-w-lg" />
                </div>
            </div>
        </div>
    );
};

export default Contact;