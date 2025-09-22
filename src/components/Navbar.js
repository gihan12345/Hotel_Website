import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 w-full top-0 z-10">
            <div className="container mx-auto flex justify-center">
                <ul className="flex space-x-12">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/rooms">Rooms & Suites</Link></li>
                    <li><Link to="/facilities">Facilities</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;  