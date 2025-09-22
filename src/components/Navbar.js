import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 w-full top-0 z-10">
            <div className="container mx-auto flex justify-center">
                <ul className="flex space-x-12">
                    <li>
                        <Link to="/about" className="transition-transform duration-200 hover:-translate-y-1 inline-block">About Us</Link>
                    </li>
                    <li>
                        <Link to="/rooms" className="transition-transform duration-200 hover:-translate-y-1 inline-block">Rooms & Suites</Link>
                    </li>
                    <li>
                        <Link to="/facilities" className="transition-transform duration-200 hover:-translate-y-1 inline-block">Facilities</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="transition-transform duration-200 hover:-translate-y-1 inline-block">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="transition-transform duration-200 hover:-translate-y-1 inline-block">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;