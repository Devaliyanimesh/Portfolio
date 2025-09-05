import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Dropdown({
  label,
  options = [],
  onSelect,
  className = "",
  defaultValue,
  childClass
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect?.(option);
    setIsOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block  ${className}`}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between px-2 w-full border rounded bg-white shadow-sm ${childClass}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selected ? selected.label : label}</span>
        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          role="listbox"
          className="absolute left-0 mt-1 w-full border rounded shadow bg-white z-10 max-h-60 overflow-auto"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              onClick={() => handleSelect(option)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                selected?.value === option.value ? "bg-gray-200 font-medium" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
