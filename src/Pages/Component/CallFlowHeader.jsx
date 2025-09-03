import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function CallFlowHeader({
  title = "Recording",
  subtitle = "",
  showClose = false,
  onClose,
  icon = "",
  bgColor = "#1D82CA",
  children,
}) {
  return (
    <div className="relative flex justify-center mt-9">
      <div className="w-[550px] min-w-[350px] bg-white rounded-lg shadow-xl border border-gray-200 p-4">
        {/* floating icon */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
          <div
            className="p-2 rounded-full border-8 border-white shadow-md flex items-center justify-center"
            style={{ backgroundColor: bgColor }}
          >
            {icon}
          </div>
        </div>

        {/* header */}
        <div className="flex justify-between items-start border-b-[3px] pb-2">
          <div>
            <h3 className="!text-lg font-bold">{title}</h3>
            {subtitle && <p className="text-sm text-black/50">{subtitle}</p>}
          </div>

          {showClose && (
            <button
              onClick={onClose}
              className="text-black/50 hover:text-black"
            >
              <CloseIcon />
            </button>
          )}
        </div>

        {/* children content */}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
