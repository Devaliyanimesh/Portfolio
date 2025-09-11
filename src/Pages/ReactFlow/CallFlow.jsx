import { useContext, useCallback, useEffect } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
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

const edgeTypes = {
  "custom-edge": CustomEdge,
};

function FlowContent() {
  const { node, setNode, edge, setEdges } = useContext(MyContext);

  useEffect(() => {
    console.log("Nodes changed:", node);
  console.log("Hii ~ CallFlow.jsx ~ FlowContent ~ edge:", edge)

  }, [node]);

  // 🟢 when ReactFlow changes nodes (drag, resize, delete etc.)
  const onNodesChange = useCallback(
    (changes) => setNode((nds) => applyNodeChanges(changes, nds)),
    [setNode]
  );

  // 🟢 when ReactFlow changes edges
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
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
      nodes={node}
      edges={edge}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}   // 🟢 ADD THIS
      onEdgesChange={onEdgesChange}   // 🟢 ADD THIS
      fitView
      nodesDraggable={true} // <-- ab drag hoga & context update hoga
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default function CallFlow() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#f5f4f5" }}>
      <ReactFlowProvider>
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
}
