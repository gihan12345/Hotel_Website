// src/components/RoomCard.js
import React from 'react';

const RoomCard = ({ room }) => {
    return (
        <div className="flex flex-col overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2">
            <img src={room.image} alt={room.name} className="object-cover w-full h-48" />
            <div className="flex flex-col flex-1 p-4">
                <h3 className="mb-2 text-xl font-semibold text-blue-700">{room.name}</h3>
                <p className="flex-1 mb-4 text-gray-600">{room.description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">{room.price}</span>
                    <button className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;