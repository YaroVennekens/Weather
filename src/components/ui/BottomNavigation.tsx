import React from "react";

interface BottomNavigationProps {
    setShowSearch: (show: boolean) => void;
}

export default function BottomNavigation({ setShowSearch }: BottomNavigationProps) {
    return (
      <div className="flex justify-between items-center mt-8 pt-4 border-t border-indigo-800">
          <button className="p-2 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
              </svg>
          </button>
          <button
            className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg"
            onClick={() => setShowSearch(true)}
          >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
              </svg>
          </button>
          <button className="p-2 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
              </svg>
          </button>
      </div>
    );
}