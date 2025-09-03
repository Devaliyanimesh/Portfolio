import React, { useState } from "react";

export default function Dropdown({ label, options, onSelect, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect && onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4  text-left border rounded shadow-sm bg-white "
      >
        {selected ? selected.label : label}
        <span className="float-right">&#9662;</span>
      </button>

      {isOpen && (
        <ul className="absolute w-full mt-1 border rounded shadow bg-white z-10 max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
