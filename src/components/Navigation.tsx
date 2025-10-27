"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-8 lg:gap-12 text-sm font-medium">
          <li>
            <Link 
              href="/" 
              className="text-white hover:text-[#c4ff00] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="text-white hover:text-[#c4ff00] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className="text-white hover:text-[#c4ff00] transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/gallery" 
              className="text-white hover:text-[#c4ff00] transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="text-white hover:text-[#c4ff00] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="text-[#c4ff00] font-bold text-xl">
            Portfolio
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#c4ff00] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4 text-base font-medium">
              <li>
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-[#c4ff00] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-[#c4ff00] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-[#c4ff00] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-[#c4ff00] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-[#c4ff00] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}