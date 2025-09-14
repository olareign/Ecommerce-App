import { CartIcon, MenuIcon, UserIcon } from "@/components/widgets/icons";
import { SITE_NAME } from "@/utils/constant";
import SearchBar from "../widgets/searchBar";
import { navItems } from "@/lib/serviceList";



export default function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-between py-6 bg-white border-b-1 border-gray-300">
                {/* Left: Menu Icon and Site Name */}
                <div className="flex items-center gap-3">
                    <MenuIcon className="bg-gray-100 rounded p-2 mr-2" />
                    <span className="text-blue-400 text-4xl font-semibold">{SITE_NAME}</span>
                </div>
                {/* Center: Search Bar with Menu Icon on both sides */}
                <div className="flex items-center gap-3 flex-1 justify-center">
                    <SearchBar className="bg-gray-100 rounded-lg px-2 py-1 w-full max-w-2xl" />
                </div>
                {/* Right: User and Cart */}
                <ul className="flex items-end gap-6 font-semibold text-gray-500 ml-6">
                    <li className="flex items-end gap-2">
                        <UserIcon w="30" h="30" />
                        <span>Sign Up/Sign In</span>
                    </li>
                    <li className="flex items-end border-l-2 border-gray-300 gap-2 pl-4">
                        <CartIcon w="30" h="30" />
                        <span>Cart</span>
                    </li>
                </ul>
            </nav>
             <nav className="py-4 bg-white border-b-1 border-gray-300">
                <ul className="flex justify-between gap-4 overflow-auto">
                    {navItems.map((item, idx) => (
                        <li
                            key={item}
                            className={`flex items-center px-2 py-2 rounded-xl ${
                                idx === 0
                                    ? "bg-blue-400 text-white font-small"
                                    : "bg-gray-100 text-gray-900"
                            } cursor-pointer transition-colors hover:bg-blue-400 hover:text-gray-100 whitespace-nowrap`}
                        >
                            {item}
                            <svg
                                className={`ml-2 w-4 h-4 hover:text-gray-100`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                            </svg>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}