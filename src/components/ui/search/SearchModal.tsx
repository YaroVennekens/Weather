import React from "react";
import { motion } from "framer-motion";
import { Description } from "@/components/handy/Typograpghy.tsx";
import {SearchInput} from '@/components/ui/search/SearchInput.tsx'
import {Button} from '@/components/ui/button/Button.tsx'

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
              <Description decoration="bold" classes="mb-4">Search Location</Description>

              <form onSubmit={handleSearch} className="space-y-4">
                  <SearchInput value={city} onChange={setCity} />
                  <div className="flex space-x-2">
                      <Button type="submit" color="primary">Search</Button>
                      <Button type="button" color="secondary" onClick={() => setShowSearch(false)}>Cancel</Button>
                  </div>
              </form>
          </div>
      </motion.div>
    );
}
