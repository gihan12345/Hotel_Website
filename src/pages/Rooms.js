import { Link } from 'react-router-dom';
import standardImg from '../assets/hotel.jpg';
import deluxeImg from '../assets/Deluxy room.jpg';
import suiteImg from '../assets/Suite room.jpg';

// Display room categories with larger images for navigation
function Rooms() {
    const categories = [
        { name: 'Standard Rooms', path: '/rooms/standard', image: standardImg },
        { name: 'Deluxe Rooms', path: '/rooms/deluxe', image: deluxeImg },
        { name: 'Suites', path: '/rooms/suites', image: suiteImg },
    ];

    return (
        <div className="min-h-screen py-12 bg-blue-50">
            <h2 className="mb-8 text-4xl font-bold text-center text-blue-700">Rooms</h2>
            <div className="container grid grid-cols-1 gap-10 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                {categories.map((category, idx) => (
                    <Link
                        key={idx}
                        to={category.path}
                        className="flex flex-col items-center p-8 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 "
                    >
                        <img src={category.image} alt={category.name} className="object-cover w-full rounded-t-lg h-80" />
                        <h3 className="mt-6 text-xl font-semibold text-blue-700">{category.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Rooms;