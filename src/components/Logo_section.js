import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Logo_section() {
    return (
        <div className="relative h-[10vh] bg-white flex items-center justify-between px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center sm:flex-row">
                <Link to="/">
                    <img src={logo} alt="Hotel Logo" className="h-16 mb-2 sm:h-20 sm:mb-0 sm:mr-4" />
                </Link>
                <div className="text-center sm:text-left">
                    <h1 className="text-xl font-bold sm:text-2xl">Luxury Hotels</h1>
                    <p className="text-sm sm:text-base">Welcome to Luxury Hotel</p>
                </div>
            </div>
            <div className="flex flex-col mt-2 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 sm:mt-0">
                <button className="px-3 py-1 text-white transition bg-blue-600 rounded sm:px-4 sm:py-2 hover:bg-blue-700">Login</button>
                <button className="px-3 py-1 text-blue-700 transition bg-gray-200 rounded sm:px-4 sm:py-2 hover:bg-gray-300">Sign Up</button>
            </div>
        </div>
    );
}
export default Logo_section;