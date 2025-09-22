import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Logo_section() {
    return (
        <div className="relative h-[10vh] bg-white flex items-center justify-between px-8">
            {/* Logo and text */}
            <div className="flex items-center">
                <Link to="/">
                    <img src={logo} alt="Hotel Logo" className="h-20 mb-1 mr-4" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold">Luxury Hotels</h1>
                    <p>Welcome to Luxury Hotel</p>
                </div>
            </div>
            {/* Buttons */}
            <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</button>
                <button className="px-4 py-2 bg-gray-200 text-blue-700 rounded hover:bg-gray-300 transition">Sign Up</button>
            </div>
        </div>
    );
}
export default Logo_section;