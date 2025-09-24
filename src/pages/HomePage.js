import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero1 from '../assets/swimming pool.jpg';
import hero2 from '../assets/Suite room.jpg';
import hero3 from '../assets/swimming pool.jpg';
import hero4 from '../assets/Suite room.jpg';
import { Link } from 'react-router-dom';
import { facilitiesData } from '../data/facilities';

// Slider settings for autoplay and responsiveness
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
        { breakpoint: 1024, settings: { dots: true } },
        { breakpoint: 768, settings: { dots: false } }
    ]
};

// Facilities slider settings
const facilitiesSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: true,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3, centerMode: true } },
        { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
        { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false } }
    ]
};

// Display homepage with a modern hero banner slider and hotel description
const HomePage = () => {
    const heroSlides = [
        { bgImage: hero1, alt: 'Luxury Hotel Lobby' },
        { bgImage: hero2, alt: 'Swimming Pool View' },
        { bgImage: hero3, alt: 'Deluxe Room Interior' },
        { bgImage: hero4, alt: 'Hotel Exterior at Sunset' }
    ];

    console.log('Hero Slides:', heroSlides); // Debug: Check if images load
    heroSlides.forEach((slide, index) => console.log(`Slide ${index + 1} Image:`, slide.bgImage)); // Enhanced debug

    return (
        <div className="min-h-screen bg-blue-50">
            <Slider {...sliderSettings}>
                {heroSlides.map((slide, index) => {
                    if (!slide.bgImage) {
                        console.error(`Slide ${index + 1} image failed to load`);
                        return null; // Skip slide if image is invalid
                    }
                    return (
                        <div key={index} className="relative w-full h-screen">
                            <img
                                src={slide.bgImage}
                                alt={slide.alt}
                                className="absolute inset-0 object-cover w-full min-h-full"
                            />
                            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
                                <h1 className="mb-4 text-5xl font-bold md:text-6xl drop-shadow-lg">Welcome to Our Luxury Hotel</h1>
                                <p className="mb-8 text-xl md:text-2xl drop-shadow-md">Experience unparalleled comfort and exquisite service.</p>
                                <Link to="/contact">
                                    <button className="px-8 py-3 font-semibold text-blue-700 transition duration-300 bg-white rounded-lg shadow-md hover:bg-blue-100">
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <div className="py-16 bg-gray-50">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="mb-6 text-3xl font-bold text-blue-700">About Our Luxury Haven</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-lg text-gray-700 md:text-xl">
                            Located in the heart of the city, we offer a serene escape with world-class amenities.
                        </p>
                        <p className="text-lg text-gray-700 md:text-xl">
                            Enjoy our stunning swimming pool, elegant suites, and exceptional dining options.
                        </p>
                        <p className="text-lg text-gray-700 md:text-xl">
                            Perfect for business travelers and leisure guests, with personalized service around the clock.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-16">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="mb-10 text-3xl font-bold text-blue-700">Facilities & Services</h2>
                    <Slider {...facilitiesSliderSettings}>
                        {facilitiesData.map((facility, idx) => (
                            <div key={idx} className="px-3">
                                <div className="flex flex-col items-center p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                                    <div className="w-full overflow-hidden rounded-lg">
                                        <img
                                            src={facility.image}
                                            alt={facility.name}
                                            className="object-cover w-full h-56 transition-opacity duration-300 ease-in-out opacity hover:opacity-100"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-xl font-semibold text-center text-blue-700">{facility.name}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="py-16 bg-transparent">
                <div className="container px-4 mx-auto text-center">
                    <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
                        <div className="p-6 transition duration-300 transform bg-white bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl hover:scale-105">
                            <p className="text-4xl font-bold text-blue-700">150K+</p>
                            <p className="text-xl text-gray-600">Yearly Visitors</p>
                        </div>
                        <div className="p-6 transition duration-300 transform bg-white bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl hover:scale-105">
                            <p className="text-4xl font-bold text-blue-700">100</p>
                            <p className="text-xl text-gray-600">Rooms & Suites</p>
                        </div>
                        <div className="p-6 transition duration-300 transform bg-white bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl hover:scale-105">
                            <p className="text-4xl font-bold text-blue-700">200+</p>
                            <p className="text-xl text-gray-600">Dedicated Staff</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;