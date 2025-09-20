import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="">
            <div className="flex justify-center items-center mt-30 mb-16">
                <img className="" src="https://i.ibb.co.com/hx6gnPSw/Frame-removebg-preview.png" alt="404 error" />
            </div>
            <div className="text-center">
                <Link to='/'><button className="btn bg-black text-white dark:bg-white dark:text-black">Go to Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;