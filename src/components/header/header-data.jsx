import { icons, Mail, MapPin, Phone } from "lucide-react";

export const info = [
    {
        label : '(000) 000-000',
        icon : <Phone size={16} />,
    },
    {
        label : 'example@gmail.com',
        icon : <Mail size={16} />,
    },
    {
        label : '2165 Royal Ln. Mesa, New Jersey 221334',
        icon : <MapPin size={16} />,
    },
];

export const pages = [
    {
        label: "Home",
        slug: "/home",
    },
    {
        label: "Services",
        slug: "/services",
    },
    {
        label: "Dentist",
        slug: "/dentist",
    },
    {
        label: "Case Stories",
        slug: "/case-stories",
    },
    {
        label: "Blog",
        slug: "/blog",
    },
    {
        label: "About Us",
        slug: "/about-us",
    },
    {
        label: "Contact Us",
        slug: "/contact-us",
    },
]