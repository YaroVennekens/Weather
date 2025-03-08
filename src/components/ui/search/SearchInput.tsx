import React from 'react'

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Enter city..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-3 rounded-xl bg-indigo-800/50 text-white placeholder-indigo-300 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
);
