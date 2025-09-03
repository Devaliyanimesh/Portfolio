import React from "react";

export default function Input({
  iconLeft,
  iconRight,
  placeholder = "Enter text",
  type = "text",
  value,
  onChange,
  maxLength,
}) {
  return (
    <div className="flex items-center gap-2 border rounded-md px-3  bg-white shadow-sm">
      {/* left icon */}
      {iconLeft && <span className="text-black/50">{iconLeft}</span>}

      {/* input */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 outline-none p-3 text-sm bg-transparent"
        maxLength={maxLength}
      />

      {/* right icon */}
      {iconRight && <span className="text-black/50">{iconRight}</span>}
    </div>
  );
}
