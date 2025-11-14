import { Link } from 'react-router-dom';
import { Instagram, Mail, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#57068C] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#57068C]">AAP</span>
              </div>
              <span>Academic Achievement Program</span>
            </div>
            <p className="text-white/80 mb-4">
              A community uplifting academic excellence and student success at NYU.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:aap@nyu.edu" className="hover:text-white/80 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/clubs" className="text-white/80 hover:text-white transition-colors">
                  Clubs Directory
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/80 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/80 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="mailto:aap@nyu.edu" className="hover:text-white transition-colors">
                  aap@nyu.edu
                </a>
              </li>
              <li>New York University</li>
              <li>New York, NY 10003</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Academic Achievement Program at NYU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
