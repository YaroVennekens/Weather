import React from "react";
import { motion } from "framer-motion";

interface SearchModalProps {
    city: string;
    setCity: (city: string) => void;
    handleSearch: (e: React.FormEvent) => void;
    setShowSearch: (show: boolean) => void;
}

export default function SearchModal({ city, setCity, handleSearch, setShowSearch }: SearchModalProps) {
    return (
      <motion.div
        className="absolute inset-0 z-50 flex items-center justify-center bg-indigo-950/90 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
          <div className="w-full max-w-md bg-indigo-900/80 p-6 rounded-3xl backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-4">Search Location</h2>
              <form onSubmit={handleSearch} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 rounded-xl bg-indigo-800/50 text-white placeholder-indigo-300 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="flex space-x-2">
                      <button
                        type="submit"
                        className="flex-1 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors"
                      >
                          Search
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowSearch(false)}
                        className="flex-1 p-3 bg-indigo-800/50 hover:bg-indigo-700/50 text-white rounded-xl transition-colors"
                      >
                          Cancel
                      </button>
                  </div>
              </form>
          </div>
      </motion.div>
    );
}