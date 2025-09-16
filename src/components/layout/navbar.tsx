"use client";

import { useState } from "react";
import { CartIcon, MenuIcon, UserIcon } from "@/components/widgets/icons";
import { SITE_NAME } from "@/utils/constant";
import SearchBar from "../widgets/searchBar";
import { navItems } from "@/lib/serviceList";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex items-center justify-between py-6 bg-white border-b-1 border-gray-300 relative">
        {/* Left: Menu Icon and Site Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden bg-gray-100 rounded p-2 mr-2"
            aria-label="Toggle menu"
          >
            <MenuIcon className="" />
          </button>

          {/* Desktop Menu Icon - Hidden on mobile */}
          <div className="hidden lg:block">
            <MenuIcon className="" />
          </div>

          <span className="text-blue-400 text-2xl md:text-4xl font-semibold">
            {SITE_NAME}
          </span>
        </div>

        {/* Center: Search Bar - Hidden on mobile, shown on desktop */}
        <div className="hidden md:flex items-center gap-3 flex-1 justify-center px-4">
          <SearchBar className="bg-gray-100 rounded-lg px-2 py-1 w-full max-w-2xl" />
        </div>

        {/* Right: Search Icon (mobile), User and Cart */}
        <div className="flex items-center gap-3">
          {/* Mobile Search Icon */}
          <button
            onClick={toggleSearch}
            className="md:hidden bg-gray-100 rounded p-2"
            aria-label="Toggle search"
          >
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>

          {/* User and Cart - Always visible */}
          <div className="hidden md:flex items-end gap-6 font-semibold text-gray-500">
            <div className="flex items-end gap-2">
              <UserIcon w="30" h="30" />
              <span className="hidden lg:inline">Sign Up/Sign In</span>
            </div>
            <div className="flex items-end border-l-2 border-gray-300 gap-2 pl-4">
              <CartIcon w="30" h="30" />
              <span className="hidden lg:inline">Cart</span>
            </div>
          </div>

          {/* Mobile User and Cart Icons */}
          <div className="flex md:hidden items-center gap-2">
            <UserIcon w="24" h="24" />
            <CartIcon w="24" h="24" />
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar - Expandable */}
      {isSearchOpen && (
        <div className="md:hidden bg-white border-b border-gray-300 px-4 py-3">
          <SearchBar className="bg-gray-100 rounded-lg px-2 py-1 w-full" />
        </div>
      )}

      {/* Desktop Navigation Items */}
      <nav className="hidden md:block py-4 bg-white border-b-1 border-gray-300">
        <ul className="flex justify-between gap-4 overflow-auto px-4 lg:px-0">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white w-80 h-full shadow-lg">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-blue-400 text-2xl font-semibold">
                {SITE_NAME}
              </span>
              <button
                onClick={toggleMobileMenu}
                className="p-2"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* User Section in Mobile Menu */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <UserIcon w="24" h="24" />
                <span className="text-gray-700 font-medium">
                  Sign Up/Sign In
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CartIcon w="24" h="24" />
                <span className="text-gray-700 font-medium">Cart</span>
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <div className="p-4">
              <h3 className="text-gray-500 text-sm font-semibold mb-3 uppercase tracking-wide">
                Categories
              </h3>
              <ul className="space-y-3">
                {navItems.map((item, idx) => (
                  <li key={item}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        idx === 0
                          ? "bg-blue-400 text-white"
                          : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item}</span>
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>© 2025 {SITE_NAME}</span>
                <span>Version 1.0</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
