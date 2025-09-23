import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomType, setRoomType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Booking request: Name: ${name}, Check-in: ${checkIn}, Check-out: ${checkOut}, Room: ${roomType}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`; // Replace with hotel's number
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="container p-8 mx-auto">
            <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
            <p>Phone: +1-800-555-1234 | Email: info@luxuryhotel.com | Address: 123 Luxury Lane, City Center</p>
            {/* Google Map */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.123456789!2d80.1303641!3d7.076109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDQnMzQuMCJOIDgwwrAwNyc1OC42IkU!5e0!3m2!1sen!2slk!4v1695519600!5m2!1sen!2slk"
                width="600"
                height="450"
                className="w-full my-4 border-0"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
            {/* Booking Form */}
            <h3 className="mb-4 text-2xl font-bold">Book Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 border" required />
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="block w-full p-2 border" required />
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="block w-full p-2 border" required />
                <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className="block w-full p-2 border" required>
                    <option value="">Select Room</option>
                    <option>Standard</option>
                    <option>Deluxe</option>
                    <option>Suite</option>
                </select>
                <button type="submit" className="p-2 text-white transition bg-blue-500 rounded hover:bg-blue-700">Book via WhatsApp</button>
            </form>
        </div>
    );
}

export default Contact;