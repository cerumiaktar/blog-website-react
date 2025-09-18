import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="bg-base-100 shadow-lg">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            class="menu menu-sm dropdown-content bg-base-100 text-lg rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link><a className="btn btn-ghost text-2xl font-bold">Blog</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn dark:bg-white dark:text-black bg-black text-white text-lg "><Link to='/signin'>Sign in</Link></a>
                    <a className="btn bg-black dark:bg-white dark:text-black text-white text-lg"><Link to='/signup'>Sign Up</Link></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;