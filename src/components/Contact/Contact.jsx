

const Contact = () => {
    return (
        <div className="mb-12 mt-12 container mx-auto border border-[#666666] rounded-2xl py-12">
            <h1 className="text-2xl font-medium text-center dark:text-black">Contact</h1>
            <div className="">
                <div className="flex flex-col space-y-4">
                    <input type="text" placeholder="Name" className="input mx-auto dark:bg-white dark:text-[#333333] dark:border dark:border-[#333333] input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Phone Number" className="input mx-auto input-bordered dark:bg-white dark:text-[#333333] dark:border dark:border-[#333333] w-full max-w-lg" />
                    <input type="email" placeholder="Email" className="input mx-auto input-bordered dark:bg-white dark:text-[#333333] dark:border dark:border-[#333333] w-full max-w-lg" />
                    <input type="submit" placeholder="Submit" className="input mx-auto bg-black text-white text-lg dark:bg-black dark:border-none input-bordered w-full max-w-lg" />
                </div>
            </div>
        </div>
    );
};

export default Contact;