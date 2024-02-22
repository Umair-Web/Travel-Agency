import { code, db, globe, lock } from "../assets/icons";
import flight from '../assets/icons/flight.png'
import visa from '../assets/icons/visa.png'
import transport from '../assets/icons/transport.png'
import travel from '../assets/icons/travel.png'
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'
import client4 from '../assets/images/client4.png'

export const aboutgrids = [
    {
        icon: flight,
        heading: 'Flight Reservations',
        text: 'Simplify your travel planning by utilizing our flight reservation services.',
        label: 'View More'
    },
    {
        icon: visa,
        heading: 'Visa Assistance',
        text: 'Navigating the visa application process can be daunting.',
        label: 'View More'
    },
    {
        icon: transport,
        heading: 'Transportation Services',
        text: 'Arrange for hassle-free transportation at your destination with our reliable services.',
        label: 'View More'
    },
    {
        icon: travel,
        heading: 'Travel Insurance',
        text: 'Ensure peace of mind during your travels with our comprehensive travel insurance options',
        label: 'View More'
    }
];


export const clients = [
    {
        image: client1,
        about: 'Our Epic Adventure was absolutely incredible! From thrilling activities to breathtaking landscapes',
        name: 'Celia Almeda',
        profile: 'Adventurous Lover'
    },

    {
        image: client2,
        about: 'The Tranquil Oasis Retreat provided the relaxation I desperately needed.',
        name: 'Nat Reynolds',
        profile: 'Relaxation Enthusiast'
    },

    {
        image: client3,
        about: 'As a food enthusiast, the Global Gastronomic Journey exceeded my expectations.',
        name: 'Bob Roberts',
        profile: 'Culinary Explorer'
    },

    {
        image: client4,
        about: 'The Cultural Mosaic Exploration was a fascinating journey into diverse cultures.',
        name: 'Mattie Smith',
        profile: 'Cultural Enthusiast'
    }
]


export const pricing = [
    {
        plan : 'Tropical',
        price : '$1,499 per person',
        label : 'Proceed Now !',
        about : 'Immerse yourself in the sun-kissed beaches.'
    },

    {
        plan : 'European',
        price : '$2,299 per person',
        label : 'Proceed Now !',
        about : 'Embark on a cultural odyssey in Europe.'
    },

    {
        plan : 'Thrilling',
        price : '$3,499 per person',
        label : 'Proceed Now !',
        about : 'Experience the inspiring beauty of wildlife.'
    }
]