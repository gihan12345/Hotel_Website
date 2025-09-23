// src/pages/RoomGrid.js
import { useParams } from 'react-router-dom';
import { roomsData } from '../data/room';
import RoomCard from '../components/RoomCard';

function RoomGrid() {
    const { category } = useParams();
    const categoryRooms = roomsData[category] || [];

    return (
        <div className="min-h-screen py-12 bg-blue-50">
            <h2 className="mb-8 text-4xl font-bold text-center text-blue-700">
                {category.charAt(0).toUpperCase() + category.slice(1)} Rooms
            </h2>
            <div className="container grid grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categoryRooms.map((room, idx) => (
                    <RoomCard key={idx} room={room} />
                ))}
            </div>
        </div>
    );
}

export default RoomGrid;