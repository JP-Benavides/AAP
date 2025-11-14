import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/clubs", label: "Clubs" },
    { path: "/events", label: "Events" },
    { path: "/resources", label: "Resources" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-xl flex items-center justify-center">
              <span className="text-white">AAP</span>
            </div>
            <span className="hidden sm:block text-[#57068C]">Academic Achievement Program</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "text-[#57068C] bg-[#57068C]/10"
                    : "text-gray-700 hover:text-[#57068C] hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="ml-4 bg-[#57068C] hover:bg-[#7208B8] rounded-xl">Join AAP</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "text-[#57068C] bg-[#57068C]/10"
                    : "text-gray-700 hover:text-[#57068C] hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-[#57068C] hover:bg-[#7208B8] rounded-xl mt-4">
              Join AAP
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
