import React, { createContext, useState } from "react";

// Create a context
export const MyContext = createContext();

export default function ContextApi({ children }) {
  let [node, setNode] = useState([
    {
      id: "start",
      type: "StartCallFlow",
      position: { x: 100, y: 0 },
    },
    {
      id: "recordingEnable",
      type: "CallRecording",
      position: { x: 100, y: 100 },
    },
    {
      id: "recordingtext",
      type: "Recording",
      position: { x: 100, y: 250 },
    },
    {
      id: "lastnode",
      type: "LastFlow",
      position: { x: 15, y: 800 },
    },
  ]);

  let [edge, setEdges] = useState([
    {
      id: "e1-2",
      source: "start",
      target: "recordingEnable",
      type: "custom-edge",
    },
    {
      id: "e2-3",
      source: "recordingEnable",
      target: "recordingtext",
      type: "custom-edge",
    },
    {
      id: "e3-4",
      source: "recordingtext",
      target: "lastnode",
      type: "custom-edge",
    },
  ]);

  return (
    <MyContext.Provider value={{ node, setNode, edge, setEdges }}>
      {children}
    </MyContext.Provider>
  );
}
