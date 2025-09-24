import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="top-0 z-10 w-full p-4 text-white bg-blue-600">
            <div className="container mx-auto">
                <div className="hidden md:flex md:justify-center md:flex-row">
                    <ul className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0">
                        <li>
                            <Link to="/about" className="inline-block transition-transform duration-200 hover:-translate-y-1">About Us</Link>
                        </li>
                        <li>
                            <Link to="/rooms" className="inline-block transition-transform duration-200 hover:-translate-y-1">Rooms & Suites</Link>
                        </li>
                        <li>
                            <Link to="/facilities" className="inline-block transition-transform duration-200 hover:-translate-y-1">Facilities</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="inline-block transition-transform duration-200 hover:-translate-y-1">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="inline-block transition-transform duration-200 hover:-translate-y-1">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* Mobile Menu Toggle (Placeholder - Add JavaScript for functionality) */}
                <div className="flex items-center justify-between md:hidden">
                    <button className="text-2xl focus:outline-none">☰</button>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/about" className="inline-block transition-transform duration-200 hover:-translate-y-1">About Us</Link>
                        </li>
                        <li>
                            <Link to="/rooms" className="inline-block transition-transform duration-200 hover:-translate-y-1">Rooms & Suites</Link>
                        </li>
                        <li>
                            <Link to="/facilities" className="inline-block transition-transform duration-200 hover:-translate-y-1">Facilities</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="inline-block transition-transform duration-200 hover:-translate-y-1">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="inline-block transition-transform duration-200 hover:-translate-y-1">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;