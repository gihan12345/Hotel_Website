import RoomCard1 from "../assets/hotel.jpg";
import RoomCard2 from "../assets/hotel.jpg";
import RoomCard3 from "../assets/hotel.jpg";
import RoomCard4 from "../assets/hotel.jpg";
import RoomCard5 from "../assets/hotel.jpg";
import RoomCard6 from "../assets/hotel.jpg";

// Define room data for different categories
export const roomsData = {
    standard: [
        { name: 'Standard Room 1', description: 'Cozy and affordable single room', price: '$100/night', image: RoomCard1 },
        { name: 'Standard Room 2', description: 'Comfortable double room with basic amenities', price: '$120/night', image: RoomCard2 },
        { name: 'Standard Room 3', description: 'Spacious standard room with city view', price: '$130/night', image: RoomCard1 },
    ],
    deluxe: [
        { name: 'Deluxe Room 1', description: 'Spacious room with a stunning city view', price: '$150/night', image: RoomCard3 },
        { name: 'Deluxe Room 2', description: 'Luxury room with private balcony', price: '$180/night', image: RoomCard4 },
        { name: 'Deluxe Room 3', description: 'Elegant deluxe suite with modern decor', price: '$200/night', image: RoomCard3 },
    ],
    suites: [
        { name: 'Suite 1', description: 'Luxury suite with premium amenities', price: '$250/night', image: RoomCard5 },
        { name: 'Suite 2', description: 'Royal suite with panoramic views', price: '$300/night', image: RoomCard6 },
        { name: 'Suite 3', description: 'Executive suite with private lounge', price: '$350/night', image: RoomCard5 },
    ],
};