import { Link } from "react-router-dom";
import logo_AboutUs from "../assets/Tropical Sunset Ocean View At Cozy Beach Resort Terrace, Tropical Sunset, Ocean View, Beach Resort Background Image And Wallpaper for Free Download.jpg";

function About() {
    return (
        <div className="min-h-screen bg-blue-50">
        
            <div className="container flex flex-col items-center gap-12 px-4 py-12 mx-auto md:flex-row">
                {/* Image */}
                <Link to="/"><img src={logo_AboutUs} alt="about us image" className="w-full rounded-lg shadow-lg"/></Link>
                
                <div className="md:w-1/2">
                    <h3 className="mb-4 text-2xl font-semibold text-blue-700">Experience Unmatched Comfort</h3>
                    <p className="mb-4 text-lg text-gray-700">
                        Luxury Hotel offers unparalleled comfort in the heart of the city. Our rooms and suites are designed for relaxation, with modern amenities and elegant décor. Whether you’re here for business or leisure, our dedicated staff ensures a memorable stay.
                    </p>
                    <ul className="mb-4 text-gray-700 list-disc list-inside">
                        <li>Prime city location</li>
                        <li>World-class facilities</li>
                        <li>24/7 concierge service</li>
                        <li>Fine dining & spa</li>
                    </ul>
                    <button className="px-6 py-2 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;