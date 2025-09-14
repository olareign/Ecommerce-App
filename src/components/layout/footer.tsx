"use client";

import { categories } from "@/lib/db";
import { services } from "@/lib/serviceList";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-sky-600 text-white">
      <div className="container p-16 flex gap-8">
        
        {/* Brand Section - Always Visible */}
        <div className="mb-4 basis-2/5">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">MegaMart</h1>
          
          {/* Contact Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-50">
              <div className="flex flex-col gap-2">
                <span>📱 WhatsApp: </span>
                <span className="ml-5">+1 202-918-2132</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>📞 Call Us:</span> 
                <span className="ml-5">+1 202-918-2132</span>
              </div>
            </div>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="#" className="bg-black rounded-md px-3 py-2 text-xs hover:bg-gray-800">
                📱 App Store
              </Link>
              <Link href="#" className="bg-black rounded-md px-3 py-2 text-xs hover:bg-gray-800">
                🤖 Google Play
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row md: justify-between lg:grid-cols-3 gap-16">          
          {/* Categories Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-white">
              Most Popular Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    • {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Customer Services Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-white">
              Customer Services
            </h3>
            <ul className="space-y-2">
              {services.map((service: string, index) => (
                <li key={index}>
                  <Link
                    href={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    • {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-sky-600 border-t border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <p className="text-center text-blue-100 text-xs md:text-sm">
            © 2025 All rights reserved. Olareign Technology Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}