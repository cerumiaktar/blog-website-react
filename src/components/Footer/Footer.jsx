

const Footer = () => {
    return (
        <div className="bg-neutral">
            <div class="text-center flex justify-center">
                <form>
                    <h6 class="footer-title text-white mt-10">Newsletter</h6>
                    <fieldset class="w-80">
                        <div class="join">
                            <input type="text" placeholder="username@site.com" class="input input-bordered bg-black border-white text-white join-item" />
                            <button class="btn bg-white text-black join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <footer className="footer sm:footer-horizontal text-neutral-content p-10 container mx-auto">

                <nav>
                    <h6 className="text-xl text-white">Company</h6>
                    <a className="link link-hover text-[#999999]">About</a>
                    <a className="link link-hover text-[#999999]">Careers</a>
                    <a className="link link-hover text-[#999999]">Events</a>
                </nav>
                <nav>
                    <h6 className="text-xl text-white">Contact</h6>
                    <a className="link link-hover text-[#999999]">Address: Dhaka, Bangladesh</a>
                    <a className="link link-hover text-[#999999]">Phone: ++8801234567345</a>
                    <a className="link link-hover text-[#999999]">Email: info@blog.com</a>
                </nav>
                <nav>
                    <h6 className="text-xl text-white">Useful Link</h6>
                    <a className="link link-hover text-[#999999]">Privacy Policy</a>
                    <a className="link link-hover text-[#999999]">Terms & Condition</a>
                    <a className="link link-hover text-[#999999]">FAQ</a>
                </nav>
                <nav>
                    <h6 className="text-xl text-white">Follow Us</h6>
                    <a className="link link-hover text-[#999999]">Facebook</a>
                    <a className="link link-hover text-[#999999]">Instagram</a>
                    <a className="link link-hover text-[#999999]">LinkedIn</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;