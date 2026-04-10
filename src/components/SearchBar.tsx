"use client";

import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search cartoon movies...",
  initialValue = "",
}: SearchBarProps) {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl" id="search-bar">
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 focus-within:ring-2"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
          focusRing: "rgba(229,9,20,0.5)",
        }}
      >
        <Search size={18} style={{ color: "#6b6b80" }} />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm"
          style={{ color: "#fff" }}
          id="search-input"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              onSearch("");
            }}
            className="text-xs px-2 py-1 rounded-md transition-all duration-200"
            style={{ color: "#6b6b80", background: "rgba(255,255,255,0.06)" }}
          >
            Clear
          </button>
        )}
      </div>
    </form>
  );
}
