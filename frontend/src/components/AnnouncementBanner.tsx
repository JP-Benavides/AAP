import { Bell, X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#57068C] to-[#7208B8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <Bell size={20} className="flex-shrink-0" />
            <p className="text-sm sm:text-base">
              <span className="hidden sm:inline">
                Join us for our Annual AAP Summit on November 20th! Registration now open.
              </span>
              <span className="sm:hidden">
                AAP Summit Nov 20 - Register now!
              </span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 rounded-lg hover:bg-white/20 transition-colors flex-shrink-0"
            aria-label="Dismiss announcement"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
