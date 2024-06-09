import { GiHouseKeys } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { BsHouseCheck } from "react-icons/bs";

export const apiEndPoint = 'https://realty-in-us.p.rapidapi.com'

export const navLinks = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'About',
        path: '/about'
    },
    {
        id: 3,
        title: 'Real Estate',
        path: '/real-estate'
    },
]



export const properties = [
    {
        id: 1,
        title: 'sold',
        path: '/list-sold',
        Icon: BsHouseCheck,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, quidem itaque labore dicta earum ipsum.'
    },
    {
        id: 2,
        title: 'rent',
        path: '/list-for-rent',
        Icon: GiHouseKeys,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, quidem itaque labore dicta earum ipsum.'
    },
    {
        id: 3,
        title: 'sale',
        path: '/list-for-sale',
        Icon: FaDollarSign,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, quidem itaque labore dicta earum ipsum.'
    },
]
