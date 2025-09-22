import { Link } from "react-router-dom";
import logo_AboutUs from "../assets/Tropical Sunset Ocean View At Cozy Beach Resort Terrace, Tropical Sunset, Ocean View, Beach Resort Background Image And Wallpaper for Free Download.jpg";

function About() {
    return (
        <div className="min-h-screen bg-blue-50">
        
            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
                {/* Image */}
                <Link to="/"><img src={logo_AboutUs} alt="about us image" className="w-full rounded-lg shadow-lg"/></Link>
                {/* Text */}
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-700">Experience Unmatched Comfort</h3>
                    <p className="text-lg mb-4 text-gray-700">
                        Luxury Hotel offers unparalleled comfort in the heart of the city. Our rooms and suites are designed for relaxation, with modern amenities and elegant décor. Whether you’re here for business or leisure, our dedicated staff ensures a memorable stay.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Prime city location</li>
                        <li>World-class facilities</li>
                        <li>24/7 concierge service</li>
                        <li>Fine dining & spa</li>
                    </ul>
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;