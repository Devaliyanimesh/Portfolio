import React from "react";

export default function StartCallFlow({ title = "Start Call Flow", subtitle = "Ask Daily" }) {
  return (
    <div
      data-id="1"
      className="svelte-flow__node svelte-flow__node-voice square connectable selectable 
                 w-[43.875rem] relative translate-x-[350px] z-0 visible"
    >
      <div className="flex justify-center">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="text-xl p-2 text-center">
        <span className="text-lg ">Build a new call flow /</span>
        <span className="bg-gradient-to-r from-teal-400 to-green-400 px-2 py-1 rounded-lg text-accent ml-1 text-sm">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
