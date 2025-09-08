import { useState, useCallback, useContext, useEffect } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { CustomEdge } from "./Edges/CustomEdge";
import Greeting from "./Nodes/Greeting";
import Forword from "./Nodes/Forword";
import SimulCall from "./Nodes/SimulCall";
import Menu from "./Nodes/Menu";
import KeyPad from "./Nodes/KeyPad";
import HangUp from "./Nodes/HangUp";
import VoiceMail from "./Nodes/VoiceMail";
import { MyContext } from "../Context/ContextApi";
import CallRecording from "./Nodes/CallRecording";
import StartCallFlow from "./Nodes/StartCallFlow";
import LastFlow from "./Nodes/LastFlow";
import Recording from "./Nodes/Recording";

const initialNodes = [
  {
    id: "n1",
    type: "StartCallFlow",
    position: { x: 100, y: 0 },
    data: { value: "Node 1" },
  },
  {
    id: "n2",
    type: "CallRecording",
    position: { x: 100, y: 100 },
    data: { value: "Node 2" },
  },
  {
    id: "n3",
    type: "Recording",
    position: { x: 100, y: 200 },
    data: { value: "Node 3" },
  },
  {
    id: "n4",
    type: "LastFlow",
    position: { x: 15, y: 600 },
    data: { value: "Node 4" },
  },
];


const initialEdges = [
  { id: "e1-2", source: "n1", target: "n2", type: "custom-edge" },
  { id: "e2-3", source: "n2", target: "n3", type: "custom-edge" },
  // { id: "e3-4", source: "n3", target: "n4", type: "custom-edge" },
  // { id: "e3-4", source: "n4", target: "n5", type: "custom-edge" },
];

console.log(initialEdges,initialNodes)
const edgeTypes = {
  "custom-edge": CustomEdge,
};

function FlowContent() {
  const { user, setUser } = useContext(MyContext);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, type: "custom-edge" }, eds)),
    []
  );

  const nodeTypes = {
    Greeting,
    Forword,
    SimulCall,
    Menu,
    KeyPad,
    HangUp,
    CallRecording,
    StartCallFlow,
    Recording,
    LastFlow,
    VoiceMail,
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodesDraggable={false} // <-- globally non-draggable
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default function CallFlow() {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#f5f4f5" }}
    >
      <ReactFlowProvider>
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
}
