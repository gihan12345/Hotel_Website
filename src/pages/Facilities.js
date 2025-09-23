import { facilitiesData } from '../data/facilities';

// Showcase hotel facilities with images
function Facilities() {
    return (
        <div className="min-h-screen py-12 bg-blue-50">
            <h2 className="mb-8 text-4xl font-bold text-center text-blue-700">Facilities & Services</h2>
            <div className="container grid grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {facilitiesData.map((facility, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
                    >
                        <div className="w-full overflow-hidden rounded-lg">
                            <img src={facility.image} alt={facility.name} className="object-cover w-full h-48" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-center text-blue-700">{facility.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Facilities;