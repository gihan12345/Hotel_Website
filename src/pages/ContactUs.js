import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomType, setRoomType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let fullMessage = `Booking request: Name: ${name}, Check-in: ${checkIn}, Check-out: ${checkOut}, Room: ${roomType}`;
        if (message.trim()) {
            fullMessage += `, Message: ${message}`;
        }
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(fullMessage)}`; // Replace with hotel's number
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="container p-8 mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-blue-700">Contact Us</h2>
            <p className="mb-6 text-gray-600">Phone: +1-800-555-1234 | Email: info@luxuryhotel.com | Address: 123 Luxury Lane, City Center</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Booking Form */}
                <div className="space-y-6">
                    <h3 className="mb-4 text-2xl font-bold text-blue-700">Book Now</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">Check-in Date</label>
                            <input
                                id="checkIn"
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">Check-out Date</label>
                            <input
                                id="checkOut"
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">Room Type</label>
                            <select
                                id="roomType"
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Select Room</option>
                                <option>Standard</option>
                                <option>Deluxe</option>
                                <option>Suite</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Optional Message</label>
                            <textarea
                                id="message"
                                placeholder="e.g., special requests"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="block w-full h-24 p-3 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-700"
                        >
                            Book via WhatsApp
                        </button>
                    </form>
                </div>
                {/* Google Map */}
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.123456789!2d80.1303641!3d7.076109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDQnMzQuMCJOIDgwwrAwNyc1OC42IkU!5e0!3m2!1sen!2slk!4v1695519600!5m2!1sen!2slk"
                        width="600"
                        height="450"
                        className="w-full h-full border-0 rounded-md shadow-md"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;