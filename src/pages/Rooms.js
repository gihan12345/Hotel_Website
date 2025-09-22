import { RoomCard } from "../components/RoomCard";

// Room Grid function
function Rooms() {
    return (
        <div className="min-h-screen py-12 bg-blue-50">
            <h2 className="mb-8 text-4xl font-bold text-center text-blue-700">Our Rooms</h2>
            <div className="container grid grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {RoomCard.map((room, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2"
                    >
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
                ))}
            </div>
        </div>
    );
}

export default Rooms;