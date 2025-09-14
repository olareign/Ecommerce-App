import { IBrandType } from "@/types/product.types";

export const navItems: Array<string> = [
    "Groceries",
    "Premium Fruits",
    "Home & Kitchen",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home Improvement",
    "Sports, Toys & Luggage",
];

const categories: Array<string> = [
    "Staples", "Beverages", "Personal Care", "Home Care", 
    "Baby Care", "Vegetables & Fruits", "Snacks & Foods", "Dairy & Bakery"
  ];

export const services: Array<string> = [
    "About Us", "Terms & Conditions", "FAQ", 
    "Privacy Policy", "E-waste Policy", "Cancellation & Return Policy"
  ];

 export const brands: IBrandType = {
    "Mobiles": [
        {
            id: 1,
            name: 'IPHONE',
            discount: 'UP to 80% OFF',
            bgColor: 'bg-gradient-to-r from-gray-800 to-gray-900',
            textColor: 'text-white',
            logoBackground: 'bg-white',
            logoText: '🍎',
            phoneColor: 'from-blue-400 to-blue-600'
        },
        {
            id: 2,
            name: 'REALME',
            discount: 'UP to 80% OFF',
            bgColor: 'bg-gradient-to-r from-yellow-200 to-yellow-300',
            textColor: 'text-gray-800',
            logoBackground: 'bg-yellow-400',
            logoText: 'realme',
            phoneColor: 'from-green-400 to-green-600'
        },
        {
            id: 3,
            name: 'XIAOMI',
            discount: 'UP to 80% OFF',
            bgColor: 'bg-gradient-to-r from-orange-200 to-orange-300',
            textColor: 'text-gray-800',
            logoBackground: 'bg-orange-500',
            logoText: 'mi',
            phoneColor: 'from-blue-400 to-blue-600'
        }
    ],
    "Fashion": [
        {
            id: 4,
            name: 'ZARA',
            discount: 'UP to 70% OFF',
            bgColor: 'bg-gradient-to-r from-gray-800 to-gray-900',
            textColor: 'text-white',
            logoBackground: 'bg-white',
            logoText: 'ZARA',
            phoneColor: 'from-pink-400 to-pink-600'
        },
        {
            id: 5,
            name: 'H&M',
            discount: 'UP to 60% OFF',
            bgColor: 'bg-gradient-to-r from-green-200 to-green-300',
            textColor: 'text-gray-800',
            logoBackground: 'bg-green-400',
            logoText: 'H&M',
            phoneColor: 'from-yellow-400 to-yellow-600'
        },
        {
            id: 6,
            name: 'LEVIS',
            discount: 'UP to 50% OFF',
            bgColor: 'bg-gradient-to-r from-blue-200 to-blue-300',
            textColor: 'text-gray-800',
            logoBackground: 'bg-blue-500',
            logoText: 'LEVIS',
            phoneColor: 'from-red-400 to-red-600'
        }
    ],
    "Electronics": [
        {
            id: 7,
            name: 'SAMSUNG',
            discount: 'UP to 40% OFF',
            bgColor: 'bg-gradient-to-r from-gray-800 to-gray-900',
            textColor: 'text-white',
            logoBackground: 'bg-white',
            logoText: 'SAMSUNG',
            phoneColor: 'from-purple-400 to-purple-600'
        },
        {
            id: 8,
            name: 'SONY',
            discount: 'UP to 30% OFF',
            bgColor: 'bg-gradient-to-r from-purple-200 to-purple-300',
            textColor: 'text-gray-800',
            logoBackground: 'bg-purple-400',
            logoText: 'SONY',
            phoneColor: 'from-indigo-400 to-indigo-600'
        },
        {
            id: 9,
            name: 'LG',
            discount: 'UP to 20% OFF',
            bgColor: 'bg-gradient-to-r from-pink-200 to-pink-300',
            textColor: 'text-gray-800',
            logoBackground: 'bg-pink-500',
            logoText: 'LG',
            phoneColor: 'from-teal-400 to-teal-600'
        }
    ]
};