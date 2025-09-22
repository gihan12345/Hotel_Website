import React from "react";

const HomePage = () => (
    <div className="min-h-screen bg-blue-50">
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Our Hotel</h1>
            <p className="text-lg text-blue-500 mb-8">Enjoy comfort, luxury, and great service.</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Book Now
            </button>
        </div>
    </div>
);

export default HomePage;