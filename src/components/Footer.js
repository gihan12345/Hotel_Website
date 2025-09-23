import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// Display footer with navigation, contact, and social links
const Footer = () => {
    return (
        <footer className="py-8 text-gray-800 bg-blue-100">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Navigation Section */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="mb-4 text-xl font-bold text-blue-700">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="transition hover:text-blue-600">Home</Link></li>
                            <li><Link to="/rooms" className="transition hover:text-blue-600">Rooms</Link></li>
                            <li><Link to="/gallery" className="transition hover:text-blue-600">Gallery</Link></li>
                            <li><Link to="/contact" className="transition hover:text-blue-600">Contact</Link></li>
                        </ul>
                    </div>
                    {/* Contact Section */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="mb-4 text-xl font-bold text-blue-700">Contact Us</h3>
                        <p className="text-gray-600">123 Luxury Lane, City Center</p>
                        <p className="text-gray-600">Phone: +1-800-555-1234</p>
                        <p className="text-gray-600">Email: info@luxuryhotel.com</p>
                    </div>
                    {/* Social Section */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-blue-700">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-600 transition hover:text-blue-600">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" className="text-gray-600 transition hover:text-blue-600">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" className="text-gray-600 transition hover:text-blue-600">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-4 mt-8 text-center text-gray-600 border-t border-gray-200">
                    <p>&copy; {new Date().getFullYear()} Luxury Hotel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;