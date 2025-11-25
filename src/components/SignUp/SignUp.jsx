import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="hero bg-base-200 dark:bg-white min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold dark:text-black">Sign Up</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 dark:bg-white shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-black">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered dark:bg-white dark:text-[#333333] dark:border dark:border-[#333333]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-black">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered dark:bg-white dark:text-[#333333] dark:border dark:border-[#333333]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-black">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered dark:bg-white dark:text-[#333333] dark:border dark:border-[#333333]" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn w-full bg-black text-white text-lg dark:bg-black dark:border-none">Sign Up</button>
                        </div>
                        <div>
                            <p className='dark:text-black'>Already have an account <Link className="text-blue-700 font-bold" to='/signin'> Signin</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;