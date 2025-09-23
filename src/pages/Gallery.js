import { galleryData } from '../data/gallery';

// Display hotel gallery in a Pinterest-style masonry layout
function Gallery() {
    return (
        <div className="min-h-screen py-12 bg-blue-50">
            <h2 className="mb-8 text-4xl font-bold text-center text-blue-700">Gallery</h2>
            <div className="container px-4 mx-auto">
                <div className="gap-6 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                    {galleryData.map((image) => (
                        <div
                            key={image.id}
                            className="mb-6 overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg cursor-pointer break-inside-avoid hover:shadow-2xl"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full ${image.heightClass} object-cover`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;